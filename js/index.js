var prefixes = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Mc", "Mac"]
var nouns = ["Cheese", "Rock", "Sky", "Cloud", "Fruit", "Frog", "Fly", "Brave", "Dawn", "Waffle", "Pancake", "Truffle", "Double", "Triple", "Super", "Silent", "Loud", "Shadow", "Light", "Dark", "Little", "Tiny", "Scarlet", "Raven", "Tiger", "Bouncy", "Breezy", "Owl", "Lizard", "Trump", "Thorn", "Scar", "Chill", "Dark", "Cinder", "Blue", "Sticky", "Slimy", "Dead", "Jazzy", "Endless", "Infinite", "Cheesy", "Spotted", "Aura", "Black", "Gray", "Cat", "Heavy", "Chicken", "Day", "Night", "Slushy", "Stripy"];
var verbs = ["eater", "walker", "runner", "crawler", "heart", "head", "soul", "blaze", "wing", "pool", "puffle", "tuffle", "bottom", "top", "son", "claw", "mark", "person", "watcher", "face", "trance", "quiver", "whisper", "hands", "thorn", "mist", "moon", "flare", "leg", "bounce", "fang", "fern", "soul", "trumper", "eclipse", "jazzer", "priester", "gaze", "berger", "burger", "cheese", "belly", "slayer", "hawk", "paw", "nugget", "spirit", "dreamer", "slush", "spark", "glow", "stripe", "speed", "board", "chin"];
var titles = ["Mr.", "Mr.", "Mr.", "Ms.", "Mrs.", "Mrs.", "Mrs.", "Dr.", "Sir", "King", "Queen", "Prince", "Princess"];
var suffixes = ["", "", "", "", "", "", "", "", "", "", "", "", "", "the Great", "the XIV", "the III", "the IV", "the V", "the IXX"];

var namePrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
var firstName = titles[Math.floor(Math.random() * titles.length)];
var middleName = nouns[Math.floor(Math.random() * nouns.length)];
var lastName = verbs[Math.floor(Math.random() * verbs.length)];
var nameSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];

var prefixAmt = prefixes.length - 12; // Because it is possible to get "", although all of the ""s are the same so you can only get it once
var suffixAmt = suffixes.length - 12;
var combos = prefixAmt * nouns.length * verbs.length * titles.length * suffixAmt;

var statsOpen = false;

function updateName() {
	document.getElementById('name').innerHTML = firstName + " " + namePrefix + middleName + lastName + " " +nameSuffix;
	
}

function generateRandomName() {
	namePrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
	firstName = titles[Math.floor(Math.random() * titles.length)];
	middleName = nouns[Math.floor(Math.random() * nouns.length)];
	lastName = verbs[Math.floor(Math.random() * verbs.length)];
	nameSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];
	updateName()
}


function toggleStats() {
	statsOpen = !statsOpen;
	if (statsOpen) {
		document.getElementById('statsButton').innerHTML = "Hide Stats";
		document.getElementById('statsTotal').innerHTML = "Total possible combinations: " + combos;
		document.getElementById('statsPrefixes').innerHTML = "Possible Prefixes: " + prefixAmt;
		document.getElementById('statsNouns').innerHTML = "Possible Nouns: " + nouns.length;
		document.getElementById('statsVerbs').innerHTML = "Possible Verbs: " + verbs.length;
		document.getElementById('statsTitles').innerHTML = "Possible Titles: " + titles.length;
		document.getElementById('statsSuffixes').innerHTML = "Possible Suffixes: " + suffixAmt;
	} else {
		document.getElementById('statsButton').innerHTML = "Show Stats";
		document.getElementById('statsTotal').innerHTML = ""
		document.getElementById('statsPrefixes').innerHTML = "";
		document.getElementById('statsNouns').innerHTML = "";
		document.getElementById('statsVerbs').innerHTML = "";
		document.getElementById('statsTitles').innerHTML = "";
		document.getElementById('statsSuffixes').innerHTML = "";
	}
}

document.onload = updateName;
