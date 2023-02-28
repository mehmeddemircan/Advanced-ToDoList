using Advanced_To_DoList.Business.Abstract;
using Advanced_To_DoList.Business.Constants;
using Advanced_To_DoList.Core.Utilities.Results;
using Advanced_ToDoList.DataAccess.Abstract;
using Advanced_ToDoList.Entities.Concrete;
using Advanced_ToDoList.Entities.Dtos.Person;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Advanced_To_DoList.Business.Concrete
{ 
    public class PersonManager : IPersonService
    {


        IPersonRepository _personRepository;
        IUserRepository _userRepository;
      
        IMapper _mapper; 
        public PersonManager(IPersonRepository personRepository, IMapper mapper, IUserRepository userRepository)
        {
            _personRepository = personRepository;
            _mapper = mapper;
            _userRepository = userRepository;
        }

        public async Task<IDataResult<PersonDto>> AddAsync(PersonAddDto entity)
        {
            var person = _mapper.Map<Person>(entity);
            //Todo: CreatedTime and CreatedId düzenlenecek  

            person.CreatedDate = DateTime.Now;




            var personAdd = await _personRepository.AddAsync(person);
            var personDto = _mapper.Map<PersonDto>(personAdd);

            return new SuccessDataResult<PersonDto>(personDto, Messages.Added);
        }

        public async Task<IDataResult<bool>> DeleteAsync(int id)
        {
            var isDelete = await _personRepository.DeleteAsync(id);
            return new SuccessDataResult<bool>(isDelete, Messages.Deleted);
        }

        public async Task<IDataResult<PersonDto>> GetAsync(Expression<Func<Person, bool>> filter)
        {
            var person = await _personRepository.GetAsync(filter);

            if (person != null)
            {

                //nested class veri aktarma 
                var user = await _userRepository.GetAsync(x => x.Id == person.UserId);

                person.User = user; 

                var personDto = _mapper.Map<PersonDto>(person);
                return new SuccessDataResult<PersonDto>(personDto, Messages.Listed);
            }
            return new ErrorDataResult<PersonDto>(null, Messages.NotListed);
        }

        public async Task<IDataResult<IEnumerable<PersonDetailDto>>> GetListAsync(Expression<Func<Person, bool>> filter = null)
        {
            if (filter == null)
            {

                var response = await _personRepository.GetListAsync();
                var personDetailDtos = _mapper.Map<IEnumerable<PersonDetailDto>>(response);

                return new SuccessDataResult<IEnumerable<PersonDetailDto>>(personDetailDtos, Messages.Listed);
            }
            else
            {
                var response = await _personRepository.GetListAsync(filter);
                var personDetailDtos = _mapper.Map<IEnumerable<PersonDetailDto>>(response);

                return new SuccessDataResult<IEnumerable<PersonDetailDto>>(personDetailDtos, Messages.Listed);
            }
        }

        public async Task<IDataResult<PersonUpdateDto>> UpdateAsync(PersonUpdateDto entity)
        {
            var getPerson = await _personRepository.GetAsync((x => x.Id == entity.Id));
            var person = _mapper.Map<Person>(entity);
            person.CreatedDate = getPerson.CreatedDate;
            person.UserId = getPerson.UserId;
            person.UpdatedDate = DateTime.Now;
            person.UpdatedUserId = 1;


            var resultUpdate = await _personRepository.UpdateAsync(person);
            var personUpdateMap = _mapper.Map<PersonUpdateDto>(resultUpdate);

            return new SuccessDataResult<PersonUpdateDto>(personUpdateMap, Messages.Updated);
        }
    }
}
