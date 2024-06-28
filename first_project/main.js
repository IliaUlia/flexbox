let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  multiplyNumeric(menu);
  
  function multiplyNumeric(menu) {
    for (let key in menu) {
        if (typeOf menu[key] == 'number')
        menu[key] *= 2;
    }
  }

  console.log(multiplyNumeric())
  
  // после вызова функции
  menu = {
    width: 400,
    height: 600,
    title: "My menu"
  };
// ----------------------
  const propsForDelete = ['name', 'id'];

const obj = {
   name: 'qwe',
   id: 12346,
   host: '127.0.0.1',
   delay: 1500
};
const transform = function (obj, props) {
    for (let key in obj) {
        if(typeof )
    }
    return obj
}

transform(obj, propsForDelete); // => {host: '127.0.0.1', delay: 1500}

console.log(transform())