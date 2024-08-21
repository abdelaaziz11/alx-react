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
  const output = [];
  const notifications = normaliezed.entities.notification;
  const messages = normaliezed.entities.messages;

  for (const id in notifications) {
    if (notifications[id].author === userId) {
      output.push(messages[notifications[id].context]);
    }
  }
  return output;
};

export { normaliezed };

export default getAllNotificationsByUser;