describe("Example Of jasmine Spy using spyOn()", function() { 
  
  it('Spyon "hello world"', function() { 
     var dictionary = new Dictionary; 
     var person = new Person; 
   
     spyOn(dictionary, "hello");  
     spyOn(dictionary, "world");  
   
     person.HelloWorld(dictionary);
     expect(dictionary.hello).toHaveBeenCalled();  
     
     expect(dictionary.world).toHaveBeenCalled();  
      
  }); 
});


describe('example of jasmine spy using createspy', function(){
  it('create spy', function(){
    var person= new Person();
    person.getname = jasmine.createSpy('name spy');
    person.getname();
    expect(person.getname).toHaveBeenCalled();
  });
});