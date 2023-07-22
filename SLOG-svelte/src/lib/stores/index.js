import { writable, get , derived} from 'svelte/store';
import {getApi, putApi, delApi, postApi} from '../helpers/api.js';
import { router } from 'tinro';

const setCurrentArticlesPage = () => {
    const {subscribe, update, set} = writable(1);

    const resetPage= () => set(1);
    const incrementPage = () => {
        update(data => data = data + 1);
        articles.fetchArticles();
    }

    return  {
        subscribe, resetPage, incrementPage
    }
} // 게시물 스크롤 증가

const setArticles = () => {
    let initValues = {
        articleList: [],
        totalPageCount: 0,
        menuPopup : '',
        editMode: ''
    }

    const {subscribe, update, set} = writable({...initValues});

    const fetchArticles = async () => {
        const currentPage = get(currentArticlesPage);
        let path = `/articles/?page=${currentPage}`;

        try {
            const access_token = get(auth).Authorization;

            const options = {
                path: path,
                access_token: access_token,
            }

            const getDatas = await getApi(options);

            const newData = {
                articleList: getDatas.articleList,
                totalPageCount: getDatas.totalPageCount,
            }

            update(datas => {
                if (currentPage === 1) {
                    datas.articleList = newData.articleList;
                    datas.totalPageCount = newData.totalPageCount;
                } else {
                    const newArticles = [...datas.articleList, ...newData.articleList];
                    datas.articleList = newArticles;
                    datas.totalPageCount = newData.totalPageCount;
                    
                }
            });

            return datas;
            
        } catch (error) {
            throw error;
        }
    }

    const resetArticles = ()=> {
        set({...initValues});
        currentArticlesPage.resetPage();
    }

    return  {
        subscribe,
        fetchArticles,
        resetArticles
    }
} // 서비스 메인 - 목록 수정 삭제 좋아요 커멘트 사용자 정의 메소드
const setLoadingArticle = () => {} // 불러올 때 서버와 통신 중이라면 로딩
const setArticleContent = () => {} // 게시물 하나의 정보
const setComments = () => {} // 특정 게시물 댓글
const setAuth = () => {
    let initValues = {
        id: '',
        email:'',
        Authorization: '',
    }

    const {subscribe, set, update} = writable({...initValues});

    const refresh = async () => {
        try {
            const authenticationUser = await postApi({path: '/auth/refresh'});
            set(authenticationUser);
            isRefresh.set(true); 
        } catch (error) {
            auth.resetUserInfo();
            isRefresh.set(false);      
        }
    }

    const resetUserInfo = () => set({...initValues});

    const login = async (email, password) => {
        try {
            const options = {
                path: '/auth/login',
                data: {
                    email: email,
                    pwd: password
                }
            }

            const result = await postApi(options);
            set(result);
            isRefresh.set(true);
            router.goto('/articles');
        } catch (error) {
            alert('오류가 발생했습니다. 로그인을 다시 시도해 주세요.')
        }
    }
    const logout = async () => {
        try {
            const options ={
                path: '/auth/logout',
            }

            await delApi(options);
            set({...initValues});
            isRefresh.set(false);
            router.goto('/');
        } catch (error) {
            alert('오류가 발생했습니다. 로그인을 다시 시도해 주세요.')
        }
    }
    const register = async (email, pwd) => {
        try {
            const options = {
                path: '/auth/register',
                data: {
                    email : email,
                    pwd : pwd,
                }
            }

            await postApi(options);
            alert('가입 완료');
            router.goto('/login');

        } catch (error) {
            alert('오류가 발생했습니다. 로그인을 다시 시도해 주세요.')
            
        }
    }

    return  {
        subscribe, refresh, resetUserInfo, login, logout, register, 
    }
} // 로그인 유저 정보
const setArticlesMode = () => {} // 보기 상태 - 모두 좋아요 내글 보기
const setIsLogin = () => {
    const checkLogin = derived(auth, $auth => $auth.Authorization ? true : false);
    return checkLogin;
} // 로그인 상테 확인

export const currentArticlesPage = setCurrentArticlesPage();
export const articles = setArticles();
export const loadingArticle = setLoadingArticle();
export const articleContent = setArticleContent();
export const comments = setComments();
export const auth =  setAuth();
export const articlesMode = setArticlesMode();
export const isLogin = setIsLogin();
export const isRefresh = writable(false);