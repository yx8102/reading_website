import fetch from '@/config/fetch'

// 获取图书首页
export const getSecSort = () => fetch('/category/homeSmallCategory');
export const getBook = param => fetch('/book/list/recommend', param);

// 分类页
export const getAllCategory = () => fetch('/category/getAllCategory');
export const getAllBooks = param => fetch('/book/list/all', param);
export const getSmallCateBook = param => fetch('/book/list/smallCategory', param);

// 用户相关操作
export const sendVerifyCode = param => fetch('/user/verifyCode/send', param);
export const checkVerifyCode = param => fetch('user/verifyCode/check', param);
export const userRegister = param => fetch('/user/register', param, 'POST');
export const userLogin = param => fetch('/user/login', param, 'POST');
export const userFallback = param => fetch('/advice/add', param, 'POST');
export const addOrUpdateNote = param => fetch('/review/addOrUpdate', param, 'POST');
export const queryBookNote = param => fetch('/notes/queryByUserIdAndBookId', param, 'POST');

// 用户界面
export const queryUserInfo = email => fetch('/user/getUserInfo', email);
export const updateUserInfo = userBaseInfoDO => fetch('/user/updateUserInfo', userBaseInfoDO, 'POST');
export const getUserBook = param => fetch('/reading/history', param);
export const userNote = param => fetch('/notes/queryByUserId', param, 'POST');
export const delNote = param => fetch('/notes/del', param);
export const delCommand = param => fetch('/review/del', param);

// 获取图书详情
export const getBookDetail = param => fetch('/book/getBookInfo', param);
export const getAllChapter = param => fetch('/chapter/getAllChapter', param);
export const getBookGrade = param => fetch('/reading/getBookGrade', param);
export const getBookCommand = param => fetch('/review/query', param, 'POST');
export const getAuthorInfo = authorId => fetch('/author/getAuthorInfo', authorId);
export const getBookRecommnad = smallCateId => fetch('/book/list/similarRecommend', smallCateId);
export const checkOnShelf = param => fetch('/reading/checkOnShelf', param);
export const addOrRemoveToShelf = param => fetch('/book/addOrRemoveToShelf', param);

// 搜索页
export const getSearchBook = param => fetch('/book/list/fuzzyQueryAll', param);

// 管理页
export const delBook = bookId => fetch('/book/del', bookId);
export const searchAuthor = authorName => fetch('/author/fuzzyQueryAuthorInfo', authorName);
export const queryAdvice = param => fetch('/advice/query', param, 'POST');
export const changeAdvice = param => fetch('/advice/update', param, 'POST');
export const upload = param => fetch('/transport/upload', param, 'POST'); // 上传接口
export const alterBook = param => fetch('/book/addOrUpdateBook', param, 'POST');
export const updateChapter = chapter => fetch('/chapter/updateChapterInfo', chapter, 'POST');
export const delAuthor = authorId => fetch('/author/del', authorId);

// 阅读页
export const getChapterContent = chapterPath => fetch('/transport/getChapterContent', chapterPath);