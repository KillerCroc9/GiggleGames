// Array of 100 fun game themes for kids
const games = [
    { name: "Puzzle Master", icon: "🧩", description: "Solve puzzles!" },
    { name: "Race Car", icon: "🏎️", description: "Speed racing!" },
    { name: "Space Adventure", icon: "🚀", description: "Explore space!" },
    { name: "Dinosaur World", icon: "🦕", description: "Meet dinos!" },
    { name: "Unicorn Magic", icon: "🦄", description: "Magical fun!" },
    { name: "Ocean Quest", icon: "🐠", description: "Dive deep!" },
    { name: "Pizza Party", icon: "🍕", description: "Make pizzas!" },
    { name: "Soccer Star", icon: "⚽", description: "Score goals!" },
    { name: "Robot Builder", icon: "🤖", description: "Build robots!" },
    { name: "Castle Defense", icon: "🏰", description: "Defend castle!" },
    { name: "Banana Bonanza", icon: "🍌", description: "Collect fruit!" },
    { name: "Dragon Rider", icon: "🐉", description: "Ride dragons!" },
    { name: "Ice Cream Shop", icon: "🍦", description: "Serve treats!" },
    { name: "Moon Landing", icon: "🌙", description: "Land safely!" },
    { name: "Rainbow Runner", icon: "🌈", description: "Run & jump!" },
    { name: "Pirate Treasure", icon: "🏴‍☠️", description: "Find gold!" },
    { name: "Farm Friends", icon: "🐮", description: "Farm fun!" },
    { name: "Superhero City", icon: "🦸", description: "Save the day!" },
    { name: "Balloon Pop", icon: "🎈", description: "Pop balloons!" },
    { name: "Ninja Training", icon: "🥷", description: "Be a ninja!" },
    { name: "Cookie Clicker", icon: "🍪", description: "Bake cookies!" },
    { name: "Magic Wand", icon: "🪄", description: "Cast spells!" },
    { name: "Beach Party", icon: "🏖️", description: "Beach games!" },
    { name: "Snowman Builder", icon: "⛄", description: "Build snowmen!" },
    { name: "Helicopter Hero", icon: "🚁", description: "Fly high!" },
    { name: "Firework Show", icon: "🎆", description: "Light the sky!" },
    { name: "Monster Match", icon: "👾", description: "Match monsters!" },
    { name: "Tennis Match", icon: "🎾", description: "Play tennis!" },
    { name: "Butterfly Garden", icon: "🦋", description: "Catch bugs!" },
    { name: "Train Station", icon: "🚂", description: "Drive trains!" },
    { name: "Cupcake Cafe", icon: "🧁", description: "Decorate cakes!" },
    { name: "Shark Attack", icon: "🦈", description: "Dodge sharks!" },
    { name: "Alien Invasion", icon: "👽", description: "Stop aliens!" },
    { name: "Penguin Slide", icon: "🐧", description: "Slide down!" },
    { name: "Bowling Alley", icon: "🎳", description: "Strike time!" },
    { name: "Gem Hunter", icon: "💎", description: "Find gems!" },
    { name: "Guitar Hero", icon: "🎸", description: "Rock out!" },
    { name: "Paint Studio", icon: "🎨", description: "Be creative!" },
    { name: "Volcano Escape", icon: "🌋", description: "Run away!" },
    { name: "Koala Climb", icon: "🐨", description: "Climb trees!" },
    { name: "Trophy Race", icon: "🏆", description: "Win prizes!" },
    { name: "Submarine Dive", icon: "🚤", description: "Go underwater!" },
    { name: "Owl Wisdom", icon: "🦉", description: "Learn facts!" },
    { name: "Candy Crush", icon: "🍬", description: "Match candy!" },
    { name: "Flamingo Dance", icon: "🦩", description: "Dance along!" },
    { name: "Taco Time", icon: "🌮", description: "Make tacos!" },
    { name: "Panda Paradise", icon: "🐼", description: "Help pandas!" },
    { name: "Star Collector", icon: "⭐", description: "Catch stars!" },
    { name: "Lightning Speed", icon: "⚡", description: "Be fast!" },
    { name: "Crown Quest", icon: "👑", description: "Find crowns!" },
    { name: "Donut Shop", icon: "🍩", description: "Serve donuts!" },
    { name: "Jellyfish Jam", icon: "🪼", description: "Float around!" },
    { name: "Bee Keeper", icon: "🐝", description: "Collect honey!" },
    { name: "Sunflower Farm", icon: "🌻", description: "Grow flowers!" },
    { name: "Basketball Dunk", icon: "🏀", description: "Slam dunk!" },
    { name: "Telescope View", icon: "🔭", description: "See stars!" },
    { name: "Chick Hatch", icon: "🐣", description: "Help chicks!" },
    { name: "Apple Picker", icon: "🍎", description: "Pick apples!" },
    { name: "Frog Jump", icon: "🐸", description: "Hop around!" },
    { name: "Crab Walk", icon: "🦀", description: "Sideways fun!" },
    { name: "Firework Pop", icon: "🎇", description: "Pop colors!" },
    { name: "Teddy Bear", icon: "🧸", description: "Dress bears!" },
    { name: "Leaf Pile", icon: "🍂", description: "Jump in!" },
    { name: "Watermelon Slice", icon: "🍉", description: "Slice fruit!" },
    { name: "Ladybug Spot", icon: "🐞", description: "Count spots!" },
    { name: "Peacock Pride", icon: "🦚", description: "Show colors!" },
    { name: "Hot Air Balloon", icon: "🎈", description: "Float up!" },
    { name: "Campfire Night", icon: "🔥", description: "Roast s'mores!" },
    { name: "Treasure Map", icon: "🗺️", description: "Follow map!" },
    { name: "Ferris Wheel", icon: "🎡", description: "Ride high!" },
    { name: "Gift Unwrap", icon: "🎁", description: "Open gifts!" },
    { name: "Parrot Talk", icon: "🦜", description: "Repeat words!" },
    { name: "Lollipop Land", icon: "🍭", description: "Sweet world!" },
    { name: "Snail Race", icon: "🐌", description: "Slow & steady!" },
    { name: "Kite Flying", icon: "🪁", description: "Fly kites!" },
    { name: "Cherry Pick", icon: "🍒", description: "Pick cherries!" },
    { name: "Walrus Wiggle", icon: "🦭", description: "Wiggle dance!" },
    { name: "Mushroom Jump", icon: "🍄", description: "Bounce high!" },
    { name: "Carousel Ride", icon: "🎠", description: "Round & round!" },
    { name: "Drum Beat", icon: "🥁", description: "Keep rhythm!" },
    { name: "Seal Show", icon: "🦭", description: "Clap & play!" },
    { name: "Rocket Ship", icon: "🚀", description: "Blast off!" },
    { name: "Bubble Blower", icon: "🫧", description: "Blow bubbles!" },
    { name: "Palm Tree", icon: "🌴", description: "Island fun!" },
    { name: "Trophy Hunt", icon: "🏅", description: "Find medals!" },
    { name: "Flower Power", icon: "🌸", description: "Plant garden!" },
    { name: "Maple Syrup", icon: "🍁", description: "Tap trees!" },
    { name: "Bird Watch", icon: "🐦", description: "Spot birds!" },
    { name: "Roller Coaster", icon: "🎢", description: "Thrill ride!" },
    { name: "Elephant Walk", icon: "🐘", description: "Stomp along!" },
    { name: "Cotton Candy", icon: "🍧", description: "Spin sugar!" },
    { name: "Fox Hunt", icon: "🦊", description: "Find foxes!" },
    { name: "Giraffe Reach", icon: "🦒", description: "Reach high!" },
    { name: "Turkey Trot", icon: "🦃", description: "Gobble fun!" },
    { name: "Pumpkin Patch", icon: "🎃", description: "Pick pumpkins!" },
    { name: "Whale Watch", icon: "🐋", description: "See whales!" },
    { name: "Hedgehog Roll", icon: "🦔", description: "Roll around!" },
    { name: "Trophy Case", icon: "🏆", description: "Collect all!" }
];

// Generate game cards
function generateGames() {
    const gamesGrid = document.getElementById('games-grid');
    
    games.forEach((game, index) => {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        gameCard.innerHTML = `
            <div class="game-icon">${game.icon}</div>
            <h3>${game.name}</h3>
            <p>${game.description}</p>
        `;
        
        // Add click event to open modal
        gameCard.addEventListener('click', () => openGame(game));
        
        // Add staggered animation delay
        gameCard.style.animationDelay = `${index * 0.01}s`;
        
        gamesGrid.appendChild(gameCard);
    });
}

// Open game in modal
function openGame(game) {
    const modal = document.getElementById('game-modal');
    const modalTitle = document.getElementById('modal-game-title');
    
    modalTitle.textContent = `${game.icon} ${game.name}`;
    modal.style.display = 'block';
}

// Close modal
function closeModal() {
    const modal = document.getElementById('game-modal');
    modal.style.display = 'none';
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    generateGames();
    
    // Close button
    document.querySelector('.close').addEventListener('click', closeModal);
    
    // Click outside modal to close
    window.addEventListener('click', (event) => {
        const modal = document.getElementById('game-modal');
        if (event.target === modal) {
            closeModal();
        }
    });
    
    // Escape key to close
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
});
