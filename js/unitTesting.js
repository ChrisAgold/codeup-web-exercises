// function yellow() {
//     return "yellow";
// }
//
//
// if (returnYellow() !== "yellow") {
//     console.error("returnYellow does not return the string yellow");
//     console.error(returnYellow() + " returned instead");
// }


// describe("returnYellow", function() {
//     it('should be a defined function', function () {
//         expect(typeof returnYellow).toBe('function');
//     });
//     it('should return "yellow"', function() {
//         expect(returnYellow()).toBe("yellow");
//     });
// });

describe("returnYellow", function() {
    it('should be a defined function', function () {
        expect(typeof returnYellow).toBe('function');
    });
    it('should return "yellow"', function() {
        expect(returnYellow()).toBe("yellow");
    });
});
