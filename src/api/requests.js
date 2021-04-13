// const requests = {
//   UnderTheDome: '1',
//   NewGirl: '/shows/58',
//   TheOriginals: '/shows/62',
//   TheVampireDiares: '/shows/63',
//   TheBigBang: '/shows/66',
//   TheVoice: '/shows/70',
//   DancingStars: '/shows/71',
//   GameofThrones: '/shows/82',
//   TheSimpsons: '/shows/83',
//   AtoZ: '/shows/92',
//   NextTopModel: '/shows/99',
//   LawandOrder: '/shows/103',
//   TheMentalist: '/shows/116',
//   StarWarsRebels: '/shows/117',
//   House: '/shows/118',
//   Lost: '/shows/123',
//   BrokeGirls: '/shows/124',
//   HouseLies: '/shows/145',
//   WebTherapy: '/shows/148',
//   BeautyandBeast: '/shows/155',
// };

const API_KEY = '6c6dbc63e95f26dbb07e7e62e031f91a';

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
};

export default requests;
