using Advanced_To_DoList.Business.Abstract;
using Advanced_To_DoList.Business.Constants;
using Advanced_To_DoList.Core.Utilities.Results;
using Advanced_ToDoList.DataAccess.Abstract;
using Advanced_ToDoList.Entities.Concrete;
using Advanced_ToDoList.Entities.Dtos.Step;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Advanced_To_DoList.Business.Concrete
{
    public class StepManager : IStepService
    {
        IStepRepository _stepRepository;
        IMapper _mapper; 
        public StepManager(IStepRepository stepRepository,IMapper mapper)
        {   
            _stepRepository = stepRepository;
            _mapper = mapper; 
        }
        public async Task<IDataResult<StepDto>> AddAsync(StepAddDto entity)
        {
            var step = _mapper.Map<Step>(entity); 

            var stepAdd = await _stepRepository.AddAsync(step);
            var stepDto = _mapper.Map<StepDto>(stepAdd); 

            return new SuccessDataResult<StepDto>(stepDto,Messages.Added);

        }

        public async Task<IDataResult<bool>> DeleteAsync(int id)
        {
            var isDelete = await _stepRepository.DeleteAsync(id); 
            return new SuccessDataResult<bool>(isDelete,Messages.Deleted);
        }

        public  async Task<IDataResult<StepDto>> GetAsync(Expression<Func<Step, bool>> filter)
        {
            var step = await _stepRepository.GetAsync(filter);

            if (step != null)
            {
                var stepDto = _mapper.Map<StepDto>(step);

                return new SuccessDataResult<StepDto>(stepDto, Messages.Listed);
            }
            return new ErrorDataResult<StepDto>(null, Messages.NotListed);
        }

        public async Task<IDataResult<IEnumerable<StepDetailDto>>> GetListAsync(Expression<Func<Step, bool>> filter = null)
        {
            if (filter == null)
            {

                var response = await _stepRepository.GetListAsync();
                var stepDetailDtos = _mapper.Map<IEnumerable<StepDetailDto>>(response);

                return new SuccessDataResult<IEnumerable<StepDetailDto>>(stepDetailDtos, Messages.Listed);
            }
            else
            {
                var response = await _stepRepository.GetListAsync(filter);
                var stepDetailDtos = _mapper.Map<IEnumerable<StepDetailDto>>(response);

                return new SuccessDataResult<IEnumerable<StepDetailDto>>(stepDetailDtos, Messages.Listed);
            }
        }

        public async Task<IDataResult<StepUpdateDto>> UpdateAsync(StepUpdateDto entity)
        {
            var getStep = await _stepRepository.GetAsync((x => x.Id == entity.Id));
            var step = _mapper.Map<Step>(entity);
            step.CreatedDate = getStep.CreatedDate;
            step.MissionId = getStep.MissionId; 
            step.UpdatedDate = DateTime.Now;
            step.UpdatedUserId = 1;


            var resultUpdate = await _stepRepository.UpdateAsync(step);
            var stepUpdateMap = _mapper.Map<StepUpdateDto>(resultUpdate);

            return new SuccessDataResult<StepUpdateDto>(stepUpdateMap, Messages.Updated);
        }
    }
}
