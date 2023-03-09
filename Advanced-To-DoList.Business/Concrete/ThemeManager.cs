using Advanced_To_DoList.Business.Abstract;
using Advanced_To_DoList.Business.Constants;
using Advanced_To_DoList.Core.Utilities.Results;
using Advanced_ToDoList.DataAccess.Abstract;
using Advanced_ToDoList.Entities.Concrete;
using Advanced_ToDoList.Entities.Dtos.Theme;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Advanced_To_DoList.Business.Concrete
{
    public class ThemeManager : IThemeService
    {

        IThemeRepository _themeRepository;
        IMapper _mapper;

        public ThemeManager(IThemeRepository themeRepository , IMapper mapper)
        {
            _themeRepository = themeRepository;
            _mapper = mapper;
        }
        public async Task<IDataResult<ThemeDto>> AddAsync(ThemeAddDto entity)
        {
            var theme = _mapper.Map<Theme>(entity);

            theme.CreatedDate = DateTime.Now;

            var themeAdd = await _themeRepository.AddAsync(theme);
            var themeDto = _mapper.Map<ThemeDto>(themeAdd);

            return new SuccessDataResult<ThemeDto>(themeDto, Messages.Added);
        }

        public async Task<IDataResult<bool>> DeleteAsync(int id)
        {
            var isDelete = await _themeRepository.DeleteAsync(id);
            return new SuccessDataResult<bool>(isDelete, Messages.Deleted); 
        }

        public async Task<IDataResult<ThemeDto>> GetAsync(Expression<Func<Theme, bool>> filter)
        {
            var theme = await _themeRepository.GetAsync(filter);

            if (theme != null)
            {

                //nested class veri aktarma 
              

                var themeDto = _mapper.Map<ThemeDto>(theme);
                return new SuccessDataResult<ThemeDto>(themeDto, Messages.Listed);
            }
            return new ErrorDataResult<ThemeDto>(null, Messages.NotListed);
        }

        public async Task<IDataResult<IEnumerable<ThemeDetailDto>>> GetListAsync(Expression<Func<Theme, bool>> filter = null)
        {
            if (filter == null)
            {

                var response = await _themeRepository.GetListAsync();
                var themeDetailDtos = _mapper.Map<IEnumerable<ThemeDetailDto>>(response);

                return new SuccessDataResult<IEnumerable<ThemeDetailDto>>(themeDetailDtos, Messages.Listed);
            }
            else
            {
                var response = await _themeRepository.GetListAsync(filter);
                var themeDetailDtos = _mapper.Map<IEnumerable<ThemeDetailDto>>(response);

                return new SuccessDataResult<IEnumerable<ThemeDetailDto>>(themeDetailDtos, Messages.Listed);
            }
        }

        public async Task<IDataResult<ThemeUpdateDto>> UpdateAsync(ThemeUpdateDto entity)
        {

            var getTheme = await _themeRepository.GetAsync((x => x.Id == entity.Id));
            var theme = _mapper.Map<Theme>(entity);
            theme.CreatedDate = getTheme.CreatedDate;
           
            theme.UpdatedDate = DateTime.Now;
            theme.UpdatedUserId = 1;


            var resultUpdate = await _themeRepository.UpdateAsync(theme);
            var themeUpdateMap = _mapper.Map<ThemeUpdateDto>(resultUpdate);

            return new SuccessDataResult<ThemeUpdateDto>(themeUpdateMap, Messages.Updated);
        }
    }
}
