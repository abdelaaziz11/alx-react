import * as notificationsData from '../../notifications.json';
import { normalize, schema } from 'normalizr';

const user = new schema.Entity('users');
const message = new schema.Entity('message', {}, { idAttribute: 'guide'});
const notification = new schema.Entity('notufication', {
  author: user,
  context: message,
});

const normaliezed = normalize(notificationsData, [notification]);

export const getAllNotificationsByUser = (userId) => {
  return notificationsData.default
    .filter((item) => item.author.id === userId)
    .map(({ context }) => context);
};

export { normaliezed };

export default getAllNotificationsByUser;