export interface Video {
  id: string;
  key: string;
  name: string;

}

export interface VideoYtbProps {
  videoData: Video[]; 
}