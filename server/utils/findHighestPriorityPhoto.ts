import { IPhoto } from '@/schema/index';

function findHighestPriorityPhoto(photos: IPhoto[]) {
  return photos.reduce((maxPhotoPriority, photo) =>
    photo.priority > maxPhotoPriority.priority ? photo : maxPhotoPriority,
  );
}

export default findHighestPriorityPhoto;
