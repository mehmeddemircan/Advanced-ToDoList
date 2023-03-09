using Advanced_To_DoList.Business.Abstract;
using Advanced_To_DoList.Business.Constants;
using Advanced_To_DoList.Core.Utilities.Results;
using Advanced_ToDoList.DataAccess.Abstract;
using Advanced_ToDoList.Entities.Concrete;
using Advanced_ToDoList.Entities.Dtos.Group;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Advanced_To_DoList.Business.Concrete
{
    public class GroupManager : IGroupService
    {

        IGroupRepository _groupRepository;
        IMissionRepository _missionRepository;
        IThemeRepository _themeRepository; 
        IMapper _mapper; 
        public GroupManager(IGroupRepository groupRepository, IMapper mapper, IMissionRepository missionRepository, IThemeRepository themeRepository)
        {
            _groupRepository = groupRepository;
            _mapper = mapper;
            _missionRepository = missionRepository;
            _themeRepository = themeRepository;
        }

        public async Task<IDataResult<GroupDto>> AddAsync(GroupAddDto entity)
        {
            var group = _mapper.Map<Group>(entity);

            group.CreatedDate = DateTime.Now;

            var groupAdd = await _groupRepository.AddAsync(group);
            var groupDto = _mapper.Map<GroupDto>(groupAdd);

            return new SuccessDataResult<GroupDto>(groupDto, Messages.Added); 

        }

        public async Task<IDataResult<bool>> DeleteAsync(int id)
        {
            var isDelete = await _groupRepository.DeleteAsync(id); 
            return new SuccessDataResult<bool>(isDelete, Messages.Deleted);
        }

        public async Task<IDataResult<GroupDto>> GetAsync(Expression<Func<Group, bool>> filter)
        {
            var group = await _groupRepository.GetAsync(filter);

            if (group != null)
            {

                //nested class veri aktarma 
                var missions = await _missionRepository.GetListAsync(x => x.GroupId == group.Id);

                group.Missions = missions;

                var theme = await _themeRepository.GetAsync(x => x.Id == group.ThemeId);

                group.Theme = theme;

                var groupDto = _mapper.Map<GroupDto>(group);
                return new SuccessDataResult<GroupDto>(groupDto, Messages.Listed);
            }
            return new ErrorDataResult<GroupDto>(null, Messages.NotListed);
        }

        public async Task<IDataResult<IEnumerable<GroupDetailDto>>> GetListAsync(Expression<Func<Group, bool>> filter = null)
        {
            if (filter == null)
            {

                var response = await _groupRepository.GetListAsync();
                var groupDetailDtos = _mapper.Map<IEnumerable<GroupDetailDto>>(response);

                return new SuccessDataResult<IEnumerable<GroupDetailDto>>(groupDetailDtos, Messages.Listed);
            }
            else
            {
                var response = await _groupRepository.GetListAsync(filter);
                var groupDetailDtos = _mapper.Map<IEnumerable<GroupDetailDto>>(response);

                return new SuccessDataResult<IEnumerable<GroupDetailDto>>(groupDetailDtos, Messages.Listed);
            }
        }

        public async Task<IDataResult<GroupUpdateDto>> UpdateAsync(GroupUpdateDto entity)
        {
            var getGroup = await _groupRepository.GetAsync((x => x.Id == entity.Id));
            var group = _mapper.Map<Group>(entity);
            group.CreatedDate = getGroup.CreatedDate;
            group.UserId = getGroup.UserId;
            group.UpdatedDate = DateTime.Now;
            group.UpdatedUserId = 1;
            group.ThemeId = entity.ThemeId;


            var resultUpdate = await _groupRepository.UpdateAsync(group);
            var groupUpdateMap = _mapper.Map<GroupUpdateDto>(resultUpdate);

            return new SuccessDataResult<GroupUpdateDto>(groupUpdateMap, Messages.Updated);
        }
    }
}
