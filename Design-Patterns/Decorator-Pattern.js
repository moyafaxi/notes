function testDec (target) {
  target.isDec = true;
}

@testDec
class Demo {

}

console.log(Demo.isDec)