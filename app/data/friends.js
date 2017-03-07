// ===============================================================================
// DATA
// Below data will hold all of the stored potential friends.

// ===============================================================================

var friendArray = [
{
  "name":"Ahmed",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
},
{
	"name": "Jacob Deming",
	"photo": "https://pbs.twimg.com/profile_images/691785039043022849/oWsy8LNR.jpg",
	"scores": [
		4,
		2,
		5,
		1,
		3,
		2,
		2,
		1,
		3,
		2
	]
},
{
	"name": "test",
	"photo": "https://pbs.twimg.com/profile_images/691785039043022849/oWsy8LNR.jpg",
	"scores": [
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1
	]
}
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendArray;


