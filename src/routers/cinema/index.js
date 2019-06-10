export default {
    path: newFunction(),
    component: () => import('@/views/Cinema'),
    children: [
        {
            path: 'city',
            component: () => import('@/components/City')
        },
        {
            path: 'comingSoon',
            component: () => import('@/components/ComingSoon')
        },
        {
            path: 'nowPlaying',
            component: () => import('@/components/NowPlaying')
        },
        {
            path: 'search',
            component: () => import('@/components/Search')
        },
        {
            path: '/movie',
            redirect: '/movie/NowPlaying'
        }
    ]
}

function newFunction() {
    return '/cinema';
}
