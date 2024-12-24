export = function() {
  return actor({

    createSomeTodos: function() { 
      this.fillField('#todo-input','Premade todo 1');
      this.pressKey('Enter');
      this.fillField('//input[@class="new-todo"]','Premade todo 2');
      this.pressKey('Enter');
      this.fillField('What needs to be done?','Premade todo 3');
      this.pressKey('Enter');
      this.fillField('//html/body/section/header/div/input','Premade todo 4');
      this.pressKey('Enter');
      this.fillField('$text-input','Premade todo 5');
      this.pressKey('Enter');
    }
  });
}
