using Advanced_To_DoList.Business.Abstract;
using Advanced_To_DoList.Business.BusinessAspects.Autofac;
using Advanced_To_DoList.Business.Constants;
using Advanced_To_DoList.Business.Validation.FluentValidation;
using Advanced_To_DoList.Core.Utilities.Business;
using Advanced_To_DoList.Core.Utilities.Results;
using Advanced_ToDoList.Core.Aspects.Validation;
using Advanced_ToDoList.DataAccess.Abstract;
using Advanced_ToDoList.Entities.Concrete;
using Advanced_ToDoList.Entities.Dtos.Mission;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Advanced_To_DoList.Business.Concrete
{
    public class MissionManager : IMissionService
    {

        IMissionRepository _missionRepository;
        IMapper _mapper;

        public MissionManager(IMissionRepository missionRepository, IMapper mapper)
        {
            _missionRepository = missionRepository;
            _mapper = mapper;
        }

        [ValidationAspect(typeof(MissionValidator))]
        public async Task<IResult> AddAsync(MissionAddDto entity)
        {

            IResult result = BusinessRules.Run(CheckIfMissionCountOfGroupCorrect(entity.MissionName,entity.GroupId));

            if (result != null)
            {
                return result; 
            }

             var mission = _mapper.Map<Mission>(entity);

             mission.CreatedDate = DateTime.Now;

             await _missionRepository.AddAsync(mission);


            return new SuccessResult(Messages.Added);
        }

        public async Task<IDataResult<bool>> DeleteAsync(int id)
        {
            var isDelete = await _missionRepository.DeleteAsync(id);
            return new SuccessDataResult<bool>(isDelete, Messages.Deleted); 
        }

        public async Task<IDataResult<MissionDto>> GetAsync(Expression<Func<Mission, bool>> filter)
        {
            var mission = await _missionRepository.GetAsync(filter);

            if (mission != null)
            {
                var missionDto = _mapper.Map<MissionDto>(mission);

                return new SuccessDataResult<MissionDto>(missionDto, Messages.Listed); 
            }
            return new ErrorDataResult<MissionDto>(null, Messages.NotListed); 
        }

        public async Task<IDataResult<IEnumerable<MissionDetailDto>>> GetListAsync(Expression<Func<Mission, bool>> filter = null)
        {
            if (filter == null)
            {

                var response = await _missionRepository.GetListAsync();
                var missionDetailDtos = _mapper.Map<IEnumerable<MissionDetailDto>>(response);

                return new SuccessDataResult<IEnumerable<MissionDetailDto>>(missionDetailDtos, Messages.Listed);
            }
            else
            {
                var response = await _missionRepository.GetListAsync(filter);
                var missionDetailDtos = _mapper.Map<IEnumerable<MissionDetailDto>>(response);

                return new SuccessDataResult<IEnumerable<MissionDetailDto>>(missionDetailDtos, Messages.Listed);
            }
        }

        public async Task<IDataResult<MissionUpdateDto>> UpdateAsync(MissionUpdateDto entity)
        {
            var getMission = await _missionRepository.GetAsync((x => x.Id == entity.Id));
            var mission = _mapper.Map<Mission>(entity);
            mission.CreatedDate = getMission.CreatedDate;
            mission.GroupId = getMission.GroupId;
            mission.UpdatedDate = DateTime.Now;
            mission.UpdatedUserId = 1;


            var resultUpdate = await _missionRepository.UpdateAsync(mission);
            var missionUpdateMap = _mapper.Map<MissionUpdateDto>(resultUpdate);

            return new SuccessDataResult<MissionUpdateDto>(missionUpdateMap, Messages.Updated);
        }


        private  IResult CheckIfMissionCountOfGroupCorrect(string missionName , int groupId )
        {
            var result =  _missionRepository.GetListAsync(m => m.MissionName == missionName && m.GroupId == groupId).Result.Any();

            if (result)
            {
                return new ErrorResult("zaten var bu isimde");
            }
            return new SuccessResult("basarili");
        }
    }
}
