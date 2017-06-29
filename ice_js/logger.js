function logger(log_level, color) {
  return message => {
    const element = document.getElementById('result');
    const messages = element.innerHTML;
    const newMessages = `${messages}<div style="color:${color}">[${log_level}] ${message}</div>`;

    element.innerHTML = newMessages;
  };
}
const errorLogger = logger('error', 'red');
const warningLogger = logger('warning', 'green');
errorLogger('boom');
warningLogger('hello');
