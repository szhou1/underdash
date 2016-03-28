(function() {
  'use strict';

  describe("Main Functions", function() {

    describe('each', function() {
      it(
        'should iterate over arrays, providing access to the element, index, and array itself',
        function() {
          var animals = ['ant', 'bat', 'cat'];
          var iterationInputs = [];

          _.each(animals, function(animal, index, list) {
            iterationInputs.push([animal, index, list]);
          });

          expect(iterationInputs).to.eql([
            ['ant', 0, animals],
            ['bat', 1, animals],
            ['cat', 2, animals]
          ]);

          console.log(iterationInputs);
        });

      it(
        'should iterate over objects, providing access to the element, index, and object itself',
        function() {
          var animals = {
            a: 'ant',
            b: 'bat',
            c: 'cat'
          };
          var iterationInputs = [];

          _.each(animals, function(animal, key, object) {
            iterationInputs.push([animal, key, object]);
          });

          expect(iterationInputs).to.eql([
            ['ant', 'a', animals],
            ['bat', 'b', animals],
            ['cat', 'c', animals]
          ]);
        });
    });
  })


}());
