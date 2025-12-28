// Array of 100 fun game themes for kids with game types
const games = [
    { name: "Puzzle Master", icon: "🧩", description: "Solve puzzles!", type: "puzzle" },
    { name: "Race Car", icon: "🏎️", description: "Speed racing!", type: "race" },
    { name: "Space Adventure", icon: "🛸", description: "Explore space!", type: "collect" },
    { name: "Dinosaur World", icon: "🦕", description: "Meet dinos!", type: "collect" },
    { name: "Unicorn Magic", icon: "🦄", description: "Magical fun!", type: "collect" },
    { name: "Ocean Quest", icon: "🐠", description: "Dive deep!", type: "collect" },
    { name: "Pizza Party", icon: "🍕", description: "Make pizzas!", type: "collect" },
    { name: "Soccer Star", icon: "⚽", description: "Score goals!", type: "shoot" },
    { name: "Robot Builder", icon: "🤖", description: "Build robots!", type: "collect" },
    { name: "Castle Defense", icon: "🏰", description: "Defend castle!", type: "shoot" },
    { name: "Banana Bonanza", icon: "🍌", description: "Collect fruit!", type: "collect" },
    { name: "Dragon Rider", icon: "🐉", description: "Ride dragons!", type: "race" },
    { name: "Ice Cream Shop", icon: "🍦", description: "Serve treats!", type: "collect" },
    { name: "Moon Landing", icon: "🌙", description: "Land safely!", type: "race" },
    { name: "Rainbow Runner", icon: "🌈", description: "Run & jump!", type: "jump" },
    { name: "Pirate Treasure", icon: "🏴‍☠️", description: "Find gold!", type: "collect" },
    { name: "Farm Friends", icon: "🐮", description: "Farm fun!", type: "collect" },
    { name: "Superhero City", icon: "🦸", description: "Save the day!", type: "race" },
    { name: "Balloon Pop", icon: "🎈", description: "Pop balloons!", type: "shoot" },
    { name: "Ninja Training", icon: "🥷", description: "Be a ninja!", type: "jump" },
    { name: "Cookie Clicker", icon: "🍪", description: "Bake cookies!", type: "collect" },
    { name: "Magic Wand", icon: "🪄", description: "Cast spells!", type: "shoot" },
    { name: "Beach Party", icon: "🏖️", description: "Beach games!", type: "collect" },
    { name: "Snowman Builder", icon: "⛄", description: "Build snowmen!", type: "puzzle" },
    { name: "Helicopter Hero", icon: "🚁", description: "Fly high!", type: "race" },
    { name: "Firework Show", icon: "🎆", description: "Light the sky!", type: "shoot" },
    { name: "Monster Match", icon: "👾", description: "Match monsters!", type: "puzzle" },
    { name: "Tennis Match", icon: "🎾", description: "Play tennis!", type: "shoot" },
    { name: "Butterfly Garden", icon: "🦋", description: "Catch bugs!", type: "collect" },
    { name: "Train Station", icon: "🚂", description: "Drive trains!", type: "race" },
    { name: "Cupcake Cafe", icon: "🧁", description: "Decorate cakes!", type: "collect" },
    { name: "Shark Attack", icon: "🦈", description: "Dodge sharks!", type: "jump" },
    { name: "Alien Invasion", icon: "👽", description: "Stop aliens!", type: "shoot" },
    { name: "Penguin Slide", icon: "🐧", description: "Slide down!", type: "race" },
    { name: "Bowling Alley", icon: "🎳", description: "Strike time!", type: "shoot" },
    { name: "Gem Hunter", icon: "💎", description: "Find gems!", type: "collect" },
    { name: "Guitar Hero", icon: "🎸", description: "Rock out!", type: "puzzle" },
    { name: "Paint Studio", icon: "🎨", description: "Be creative!", type: "puzzle" },
    { name: "Volcano Escape", icon: "🌋", description: "Run away!", type: "race" },
    { name: "Koala Climb", icon: "🐨", description: "Climb trees!", type: "jump" },
    { name: "Trophy Race", icon: "🏆", description: "Win prizes!", type: "race" },
    { name: "Submarine Dive", icon: "🚤", description: "Go underwater!", type: "collect" },
    { name: "Owl Wisdom", icon: "🦉", description: "Learn facts!", type: "puzzle" },
    { name: "Candy Crush", icon: "🍬", description: "Match candy!", type: "puzzle" },
    { name: "Flamingo Dance", icon: "🦩", description: "Dance along!", type: "puzzle" },
    { name: "Taco Time", icon: "🌮", description: "Make tacos!", type: "collect" },
    { name: "Panda Paradise", icon: "🐼", description: "Help pandas!", type: "collect" },
    { name: "Star Collector", icon: "⭐", description: "Catch stars!", type: "collect" },
    { name: "Lightning Speed", icon: "⚡", description: "Be fast!", type: "race" },
    { name: "Crown Quest", icon: "👑", description: "Find crowns!", type: "collect" },
    { name: "Donut Shop", icon: "🍩", description: "Serve donuts!", type: "collect" },
    { name: "Jellyfish Jam", icon: "🪼", description: "Float around!", type: "collect" },
    { name: "Bee Keeper", icon: "🐝", description: "Collect honey!", type: "collect" },
    { name: "Sunflower Farm", icon: "🌻", description: "Grow flowers!", type: "collect" },
    { name: "Basketball Dunk", icon: "🏀", description: "Slam dunk!", type: "shoot" },
    { name: "Telescope View", icon: "🔭", description: "See stars!", type: "collect" },
    { name: "Chick Hatch", icon: "🐣", description: "Help chicks!", type: "collect" },
    { name: "Apple Picker", icon: "🍎", description: "Pick apples!", type: "collect" },
    { name: "Frog Jump", icon: "🐸", description: "Hop around!", type: "jump" },
    { name: "Crab Walk", icon: "🦀", description: "Sideways fun!", type: "race" },
    { name: "Firework Pop", icon: "🎇", description: "Pop colors!", type: "shoot" },
    { name: "Teddy Bear", icon: "🧸", description: "Dress bears!", type: "puzzle" },
    { name: "Leaf Pile", icon: "🍂", description: "Jump in!", type: "jump" },
    { name: "Watermelon Slice", icon: "🍉", description: "Slice fruit!", type: "shoot" },
    { name: "Ladybug Spot", icon: "🐞", description: "Count spots!", type: "collect" },
    { name: "Peacock Pride", icon: "🦚", description: "Show colors!", type: "puzzle" },
    { name: "Hot Air Balloon", icon: "☁️", description: "Float up!", type: "race" },
    { name: "Campfire Night", icon: "🔥", description: "Roast s'mores!", type: "collect" },
    { name: "Treasure Map", icon: "🗺️", description: "Follow map!", type: "collect" },
    { name: "Ferris Wheel", icon: "🎡", description: "Ride high!", type: "race" },
    { name: "Gift Unwrap", icon: "🎁", description: "Open gifts!", type: "collect" },
    { name: "Parrot Talk", icon: "🦜", description: "Repeat words!", type: "puzzle" },
    { name: "Lollipop Land", icon: "🍭", description: "Sweet world!", type: "collect" },
    { name: "Snail Race", icon: "🐌", description: "Slow & steady!", type: "race" },
    { name: "Kite Flying", icon: "🪁", description: "Fly kites!", type: "race" },
    { name: "Cherry Pick", icon: "🍒", description: "Pick cherries!", type: "collect" },
    { name: "Walrus Wiggle", icon: "🦭", description: "Wiggle dance!", type: "puzzle" },
    { name: "Mushroom Jump", icon: "🍄", description: "Bounce high!", type: "jump" },
    { name: "Carousel Ride", icon: "🎠", description: "Round & round!", type: "race" },
    { name: "Drum Beat", icon: "🥁", description: "Keep rhythm!", type: "puzzle" },
    { name: "Seal Show", icon: "🦦", description: "Clap & play!", type: "puzzle" },
    { name: "Rocket Ship", icon: "🚀", description: "Blast off!", type: "race" },
    { name: "Bubble Blower", icon: "🫧", description: "Blow bubbles!", type: "shoot" },
    { name: "Palm Tree", icon: "🌴", description: "Island fun!", type: "collect" },
    { name: "Trophy Hunt", icon: "🏅", description: "Find medals!", type: "collect" },
    { name: "Flower Power", icon: "🌸", description: "Plant garden!", type: "collect" },
    { name: "Maple Syrup", icon: "🍁", description: "Tap trees!", type: "collect" },
    { name: "Bird Watch", icon: "🐦", description: "Spot birds!", type: "collect" },
    { name: "Roller Coaster", icon: "🎢", description: "Thrill ride!", type: "race" },
    { name: "Elephant Walk", icon: "🐘", description: "Stomp along!", type: "race" },
    { name: "Cotton Candy", icon: "🍧", description: "Spin sugar!", type: "collect" },
    { name: "Fox Hunt", icon: "🦊", description: "Find foxes!", type: "collect" },
    { name: "Giraffe Reach", icon: "🦒", description: "Reach high!", type: "jump" },
    { name: "Turkey Trot", icon: "🦃", description: "Gobble fun!", type: "race" },
    { name: "Pumpkin Patch", icon: "🎃", description: "Pick pumpkins!", type: "collect" },
    { name: "Whale Watch", icon: "🐋", description: "See whales!", type: "collect" },
    { name: "Hedgehog Roll", icon: "🦔", description: "Roll around!", type: "race" },
    { name: "Trophy Case", icon: "🎖️", description: "Collect all!", type: "collect" }
];

// 3D-Style Game Engine using Canvas 2D with isometric perspective
class Game3D {
    constructor(gameData) {
        this.gameData = gameData;
        this.canvas = document.getElementById('game-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = 600;
        this.canvas.height = 400;
        
        this.player = { x: 300, y: 200, z: 0, size: 20, vz: 0 };
        this.collectibles = [];
        this.obstacles = [];
        this.score = 0;
        this.winScore = 10;
        this.gameWon = false;
        this.keys = {};
        this.animationId = null;
    }

    init() {
        this.createGame();
        this.setupControls();
        this.animate();
    }

    createGame() {
        switch(this.gameData.type) {
            case 'collect':
                this.createCollectionGame();
                break;
            case 'race':
                this.createRaceGame();
                break;
            case 'shoot':
                this.createShootingGame();
                break;
            case 'puzzle':
                this.createPuzzleGame();
                break;
            case 'jump':
                this.createJumpingGame();
                break;
            default:
                this.createCollectionGame();
        }
    }

    createCollectionGame() {
        for (let i = 0; i < 10; i++) {
            this.collectibles.push({
                x: Math.random() * 500 + 50,
                y: Math.random() * 300 + 50,
                z: 0,
                size: 15,
                color: '#FFD700',
                collected: false
            });
        }
    }

    createRaceGame() {
        this.winScore = 1;
        // Create finish line
        this.collectibles.push({
            x: 300,
            y: 50,
            z: 0,
            size: 100,
            color: '#FF0000',
            type: 'finish'
        });
        // Create obstacles
        for (let i = 0; i < 5; i++) {
            this.obstacles.push({
                x: Math.random() * 400 + 100,
                y: Math.random() * 200 + 100,
                size: 25,
                color: '#8B4513'
            });
        }
    }

    createShootingGame() {
        for (let i = 0; i < 10; i++) {
            this.collectibles.push({
                x: Math.random() * 400 + 100,
                y: Math.random() * 150 + 50,
                z: 0,
                size: 20,
                color: '#FF00FF',
                collected: false
            });
        }
    }

    createPuzzleGame() {
        this.winScore = 5;
        const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF'];
        for (let i = 0; i < 5; i++) {
            this.collectibles.push({
                x: 120 + i * 80,
                y: 150,
                z: 0,
                size: 30,
                color: colors[i],
                collected: false
            });
        }
    }

    createJumpingGame() {
        this.winScore = 10;
        this.player.gravity = true;
        for (let i = 0; i < 10; i++) {
            this.collectibles.push({
                x: 100 + i * 50,
                y: 300 - i * 20,
                z: 0,
                size: 15,
                color: '#00FF00',
                collected: false,
                type: 'platform'
            });
        }
    }

    setupControls() {
        document.addEventListener('keydown', (e) => {
            this.keys[e.key] = true;
            if (e.key === ' ') {
                if (this.gameData.type === 'jump' && this.player.z === 0) {
                    this.player.vz = 8;
                } else if (this.gameData.type === 'shoot') {
                    this.shoot();
                }
            }
        });
        
        document.addEventListener('keyup', (e) => {
            this.keys[e.key] = false;
        });
    }

    shoot() {
        const projectile = {
            x: this.player.x,
            y: this.player.y - 30,
            vx: 0,
            vy: -5,
            size: 5,
            color: '#FFFF00',
            type: 'projectile'
        };
        this.obstacles.push(projectile);
    }

    updatePlayer() {
        if (this.gameWon) return;
        
        const speed = 4;
        
        if (this.keys['ArrowLeft'] || this.keys['a']) this.player.x -= speed;
        if (this.keys['ArrowRight'] || this.keys['d']) this.player.x += speed;
        if (this.keys['ArrowUp'] || this.keys['w']) this.player.y -= speed;
        if (this.keys['ArrowDown'] || this.keys['s']) this.player.y += speed;
        
        // Jumping physics
        if (this.player.gravity) {
            this.player.vz -= 0.5;
            this.player.z += this.player.vz;
            if (this.player.z < 0) {
                this.player.z = 0;
                this.player.vz = 0;
            }
        }
        
        // Boundaries
        this.player.x = Math.max(20, Math.min(580, this.player.x));
        this.player.y = Math.max(20, Math.min(380, this.player.y));
    }

    checkCollisions() {
        if (this.gameWon) return;
        
        for (let i = this.collectibles.length - 1; i >= 0; i--) {
            const item = this.collectibles[i];
            if (item.collected) continue;
            
            const dx = this.player.x - item.x;
            const dy = this.player.y - item.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < this.player.size + item.size) {
                item.collected = true;
                this.collectibles.splice(i, 1);
                this.addScore();
            }
        }
        
        // Check projectile collisions
        for (let i = this.obstacles.length - 1; i >= 0; i--) {
            const obs = this.obstacles[i];
            if (obs.type === 'projectile') {
                obs.x += obs.vx || 0;
                obs.y += obs.vy || 0;
                
                // Remove if out of bounds
                if (obs.y < 0 || obs.y > 400) {
                    this.obstacles.splice(i, 1);
                    continue;
                }
                
                // Check hit with collectibles
                for (let j = this.collectibles.length - 1; j >= 0; j--) {
                    const item = this.collectibles[j];
                    const dx = obs.x - item.x;
                    const dy = obs.y - item.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < 20) {
                        this.collectibles.splice(j, 1);
                        this.obstacles.splice(i, 1);
                        this.addScore();
                        break;
                    }
                }
            }
        }
    }

    addScore() {
        this.score++;
        document.getElementById('score-display').textContent = `Score: ${this.score}`;
        
        if (this.score >= this.winScore) {
            this.win();
        }
    }

    win() {
        this.gameWon = true;
        document.getElementById('win-message').style.display = 'block';
    }

    draw() {
        // Clear canvas
        this.ctx.fillStyle = '#87CEEB';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Draw ground with 3D effect
        this.ctx.fillStyle = '#90EE90';
        this.ctx.fillRect(0, this.canvas.height - 50, this.canvas.width, 50);
        
        // Draw grid for 3D effect
        this.ctx.strokeStyle = '#70CE70';
        this.ctx.lineWidth = 1;
        for (let i = 0; i < this.canvas.width; i += 30) {
            this.ctx.beginPath();
            this.ctx.moveTo(i, this.canvas.height - 50);
            this.ctx.lineTo(i, this.canvas.height);
            this.ctx.stroke();
        }
        
        // Draw obstacles (as 3D cubes)
        this.obstacles.forEach(obs => {
            if (obs.type === 'projectile') {
                this.ctx.fillStyle = obs.color;
                this.ctx.beginPath();
                this.ctx.arc(obs.x, obs.y, obs.size, 0, Math.PI * 2);
                this.ctx.fill();
            } else {
                this.draw3DBox(obs.x, obs.y, obs.size, obs.color);
            }
        });
        
        // Draw collectibles (as 3D objects)
        this.collectibles.forEach(item => {
            if (!item.collected) {
                // Animate floating
                const float = Math.sin(Date.now() / 200) * 5;
                if (item.type === 'finish') {
                    this.ctx.fillStyle = item.color;
                    this.ctx.fillRect(item.x - item.size/2, item.y - 10 + float, item.size, 20);
                } else {
                    this.draw3DSphere(item.x, item.y + float, item.z, item.size, item.color);
                }
            }
        });
        
        // Draw player (as 3D cube)
        this.draw3DBox(this.player.x, this.player.y - this.player.z, this.player.size, '#00FF00');
        
        // Draw shadow
        this.ctx.fillStyle = 'rgba(0,0,0,0.2)';
        this.ctx.beginPath();
        this.ctx.ellipse(this.player.x, this.player.y + this.player.size/2, this.player.size/2, this.player.size/4, 0, 0, Math.PI * 2);
        this.ctx.fill();
    }

    draw3DBox(x, y, size, color) {
        // Front face
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x - size/2, y - size/2, size, size);
        
        // Top face (lighter)
        this.ctx.fillStyle = this.lightenColor(color, 30);
        this.ctx.beginPath();
        this.ctx.moveTo(x - size/2, y - size/2);
        this.ctx.lineTo(x, y - size/2 - size/3);
        this.ctx.lineTo(x + size/2, y - size/2 - size/3);
        this.ctx.lineTo(x + size/2, y - size/2);
        this.ctx.fill();
        
        // Right face (darker)
        this.ctx.fillStyle = this.darkenColor(color, 30);
        this.ctx.beginPath();
        this.ctx.moveTo(x + size/2, y - size/2);
        this.ctx.lineTo(x + size/2 + size/3, y - size/3);
        this.ctx.lineTo(x + size/2 + size/3, y + size/2 - size/3);
        this.ctx.lineTo(x + size/2, y + size/2);
        this.ctx.fill();
        
        // Outline
        this.ctx.strokeStyle = '#000';
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(x - size/2, y - size/2, size, size);
    }

    draw3DSphere(x, y, z, size, color) {
        const gradient = this.ctx.createRadialGradient(x - size/4, y - size/4, 0, x, y, size);
        gradient.addColorStop(0, this.lightenColor(color, 50));
        gradient.addColorStop(1, color);
        
        this.ctx.fillStyle = gradient;
        this.ctx.beginPath();
        this.ctx.arc(x, y - z, size, 0, Math.PI * 2);
        this.ctx.fill();
        
        this.ctx.strokeStyle = '#000';
        this.ctx.lineWidth = 2;
        this.ctx.stroke();
    }

    lightenColor(color, percent) {
        const num = parseInt(color.replace('#',''), 16);
        const amt = Math.round(2.55 * percent);
        const R = Math.min(255, (num >> 16) + amt);
        const G = Math.min(255, (num >> 8 & 0x00FF) + amt);
        const B = Math.min(255, (num & 0x0000FF) + amt);
        return '#' + (0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1);
    }

    darkenColor(color, percent) {
        const num = parseInt(color.replace('#',''), 16);
        const amt = Math.round(2.55 * percent);
        const R = Math.max(0, (num >> 16) - amt);
        const G = Math.max(0, (num >> 8 & 0x00FF) - amt);
        const B = Math.max(0, (num & 0x0000FF) - amt);
        return '#' + (0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1);
    }

    animate() {
        if (!this.gameWon) {
            this.animationId = requestAnimationFrame(() => this.animate());
        }
        
        this.updatePlayer();
        this.checkCollisions();
        this.draw();
    }

    destroy() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        this.keys = {};
        document.removeEventListener('keydown', this.keyHandler);
        document.removeEventListener('keyup', this.keyHandler);
    }
}

// Current game instance
let currentGame = null;

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
        
        gameCard.addEventListener('click', () => openGame(game));
        gameCard.style.animationDelay = `${index * 0.01}s`;
        
        gamesGrid.appendChild(gameCard);
    });
}

// Open game in modal
function openGame(game) {
    const modal = document.getElementById('game-modal');
    const modalTitle = document.getElementById('modal-game-title');
    const instructions = document.getElementById('game-instructions');
    
    modalTitle.textContent = `${game.icon} ${game.name}`;
    
    // Set instructions based on game type
    let instructionText = 'Use Arrow Keys or WASD to move. ';
    if (game.type === 'shoot') {
        instructionText += 'Press SPACE to shoot targets!';
    } else if (game.type === 'jump') {
        instructionText += 'Press SPACE to jump on platforms!';
    } else if (game.type === 'race') {
        instructionText += 'Reach the red finish line!';
    } else if (game.type === 'puzzle') {
        instructionText += 'Touch all colored blocks!';
    } else {
        instructionText += 'Collect all golden objects!';
    }
    instructions.textContent = instructionText;
    
    modal.style.display = 'block';
    
    // Reset UI
    document.getElementById('score-display').textContent = 'Score: 0';
    document.getElementById('win-message').style.display = 'none';
    
    // Start game after a short delay
    setTimeout(() => {
        if (currentGame) {
            currentGame.destroy();
        }
        currentGame = new Game3D(game);
        currentGame.init();
    }, 100);
}

// Close modal
function closeModal() {
    const modal = document.getElementById('game-modal');
    modal.style.display = 'none';
    if (currentGame) {
        currentGame.destroy();
        currentGame = null;
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    generateGames();
    
    document.querySelector('.close').addEventListener('click', closeModal);
    
    window.addEventListener('click', (event) => {
        const modal = document.getElementById('game-modal');
        if (event.target === modal) {
            closeModal();
        }
    });
    
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
    
    document.getElementById('play-again-btn').addEventListener('click', () => {
        if (currentGame) {
            const gameData = currentGame.gameData;
            currentGame.destroy();
            currentGame = new Game3D(gameData);
            currentGame.init();
            document.getElementById('win-message').style.display = 'none';
            document.getElementById('score-display').textContent = 'Score: 0';
        }
    });
});
