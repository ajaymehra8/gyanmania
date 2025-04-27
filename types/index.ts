// Navigation stack type
export type RootStackParamList = {
  Home: undefined;
  VideoPlayer: { videoUrl: string };
  Chat:undefined;
  Courses:{filter?:string};
  SingleCourse:{_id?:string};
};

