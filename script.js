const tipsData = [
    { 
        title: "Build Quickly", 
        description: "Master the art of building structures rapidly. High ground advantage is crucial in fights, so practice building to gain the upper hand.",
    },
    { 
        title: "Utilize Headphones", 
        description: "Equip headphones to amplify in-game audio. Hearing enemy footsteps and gunshots can provide critical information, aiding in locating opponents and avoiding ambushes.",
    },
    { 
        title: "Choose Landing Spots Wisely", 
        description: "Strategically select landing spots to optimize loot and minimize engagements. Crowded areas offer potential for quick eliminations but increase the risk of early conflict. Quieter areas provide safer looting opportunities.",
    },
    { 
        title: "Organize Your Inventory", 
        description: "Maintain an organized inventory to quickly access essential items during intense battles. Prioritize weapons, healing items, and building materials for efficient combat readiness.",
    },
    { 
        title: "Stay Agile", 
        description: "Keep moving during engagements to make yourself a difficult target. Utilize jumping, crouching, and strafing to evade enemy fire and increase survival chances.",
    },
    { 
        title: "Sharpen Your Aim", 
        description: "Regularly practice your aim to enhance accuracy and increase eliminations. Utilize creative mode or aim training maps to refine your shooting skills.",
    },
    { 
        title: "Monitor the Storm", 
        description: "Remain vigilant of the storm's movements to plan effective rotations and avoid being caught outside the safe zone. Being storm-aware is crucial for survival.",
    },
    { 
        title: "Maintain Composure", 
        description: "Stay calm and composed during intense encounters. Panic can lead to poor decision-making and costly mistakes, so focus on staying collected to secure victories.",
    },
    { 
        title: "Learn from Experts", 
        description: "Study gameplay from experienced players on platforms like Twitch or YouTube. Observing their strategies and techniques can provide valuable insights to improve your gameplay.",
    },
    { 
        title: "Adapt to Updates", 
        description: "Stay informed about game updates and meta changes. Adapt your playstyle and strategies accordingly to remain competitive and maximize success in Fortnite.",
    },
    { 
        title: "Communicate Effectively", 
        description: "Utilize voice chat or in-game communication tools to coordinate with teammates. Clear communication enhances teamwork and increases the likelihood of victory in squad matches.",
    },
    { 
        title: "Stay Updated on Patch Notes", 
        description: "Regularly review patch notes to understand gameplay changes and new features. Being informed allows you to adapt your strategies and stay ahead of the competition.",
    },
];

const tipsContainer = document.getElementById("tipsContainer");

// Function to display tips
function displayTips() {
    tipsContainer.innerHTML = "";
    tipsData.forEach(tip => {
        const tipElement = document.createElement("div");
        tipElement.classList.add("tip");
        tipElement.innerHTML = `
            <h2>${tip.title}</h2>
            <p>${tip.description}</p>
        `;
        tipsContainer.appendChild(tipElement);
    });
}
// Function to create a note with options
function createNoteWithOptions(noteText) {
    const noteElement = document.createElement('div');
    noteElement.classList.add('note');

    const noteTextElement = document.createElement('span');
    noteTextElement.textContent = noteText;
    noteElement.appendChild(noteTextElement);

    const optionsButton = document.createElement('button');
    optionsButton.classList.add('options-button');
    optionsButton.textContent = '⋮'; // Three dots character
    optionsButton.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevents note from being clicked when options button is clicked
        const menu = document.createElement('div');
        menu.classList.add('options-menu');
        
        const deleteOption = document.createElement('div');
        deleteOption.textContent = 'Delete';
        deleteOption.classList.add('option');
        deleteOption.addEventListener('click', function() {
            noteElement.remove(); // Remove the note when delete option is clicked
        });

        menu.appendChild(deleteOption);
        noteElement.appendChild(menu);
    });

    noteElement.appendChild(optionsButton);
    return noteElement;
}

// Function to save note
function saveNote() {
    const noteInput = document.getElementById('noteInput').value;
    if (noteInput.trim() !== '') {
        // Create a new note element with options
        const noteElement = createNoteWithOptions(noteInput);
        
        // Append the note to the note list
        const noteList = document.getElementById('noteList');
        noteList.appendChild(noteElement);
        
        // Clear the input field after saving
        document.getElementById('noteInput').value = '';
    }
}

// Event listener for form submission
document.getElementById('noteForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    saveNote(); // Call saveNote function
});

// Close options menu when clicking outside
document.addEventListener('click', function(event) {
    const optionsMenus = document.querySelectorAll('.options-menu');
    optionsMenus.forEach(function(menu) {
        if (!menu.contains(event.target)) {
            menu.remove();
        }
    });
});
// Function to create a note with options
function createNoteWithOptions(noteText) {
    const noteElement = document.createElement('div');
    noteElement.classList.add('note');

    const noteTextElement = document.createElement('span');
    noteTextElement.textContent = noteText;
    noteElement.appendChild(noteTextElement);

    const optionsButton = document.createElement('button');
    optionsButton.classList.add('options-button');
    optionsButton.textContent = '⋮'; // Three dots character
    optionsButton.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevents note from being clicked when options button is clicked
        const menu = document.createElement('div');
        menu.classList.add('options-menu');
        
        const deleteOption = document.createElement('div');
        deleteOption.textContent = 'Delete';
        deleteOption.classList.add('option');
        deleteOption.addEventListener('click', function() {
            noteElement.remove(); // Remove the note when delete option is clicked
        });

        menu.appendChild(deleteOption);
        noteElement.appendChild(menu);
    });

    noteElement.appendChild(optionsButton);
    return noteElement;
}

// Function to save note
function saveNote() {
    const noteInput = document.getElementById('noteInput').value;
    if (noteInput.trim() !== '') {
        // Create a new note element with options
        const noteElement = createNoteWithOptions(noteInput);
        
        // Append the note to the note list
        const noteList = document.getElementById('noteList');
        noteList.appendChild(noteElement);
        
        // Clear the input field after saving
        document.getElementById('noteInput').value = '';
    }
}

// Function to save notes to a text file
function saveToFile() {
    const noteList = document.querySelectorAll('.note');
    let notesText = '';

    // Concatenate all notes into a single string
    noteList.forEach(function(note) {
        notesText += note.textContent.trim() + '\n';
    });

    // Create a Blob object containing the notes text
    const blob = new Blob([notesText], { type: 'text/plain' });

    // Create a temporary URL for the Blob
    const url = URL.createObjectURL(blob);

    // Create an anchor element to trigger the download
    const a = document.createElement('a');
    a.href = url;
    a.download = 'notes.txt'; // File name for download
    document.body.appendChild(a);
    a.click();

    // Remove the temporary anchor element
    document.body.removeChild(a);
}

// Event listener for form submission
document.getElementById('noteForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    saveNote(); // Call saveNote function
});

// Event listener for saving to file
document.getElementById('saveToFileButton').addEventListener('click', function() {
    saveToFile(); // Call saveToFile function
});

// Close options menu when clicking outside
document.addEventListener('click', function(event) {
    const optionsMenus = document.querySelectorAll('.options-menu');
    optionsMenus.forEach(function(menu) {
        if (!menu.contains(event.target)) {
            menu.remove();
        }
    });
});

// Call the function to display tips
displayTips();
