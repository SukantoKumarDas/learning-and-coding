// Implementing facade pattern in JavaScript
// The facade pattern is a structural design pattern that provides a simplified interface to a complex subsystem.
// It defines a higher-level interface that makes the subsystem easier to use.
// The facade pattern is often used to provide a simple interface to a complex system, making it easier to use and understand.
// It is also used to decouple a client from a complex subsystem, allowing the client to interact with the subsystem through a simple interface.
// The facade pattern is often used in libraries and frameworks to provide a simple interface to a complex system.

// In this example, we will create a simple home theater system with a facade that provides a simplified interface to the complex subsystem.
// The home theater system will have a DVD player, projector, and sound system.
// The facade will provide a simple interface to the home theater system, allowing the user to turn on the system and watch a movie.
// The facade pattern is useful when you want to provide a simple interface to a complex system, making it easier to use and understand.
// It is also useful when you want to decouple a client from a complex subsystem, allowing the client to interact with the subsystem through a simple interface.
// The facade pattern is often used in libraries and frameworks to provide a simple interface to a complex system.

class DVDPlayer {
    play(movie) {
        console.log(`Playing movie: ${movie}`);
    }
    stop() {
        console.log('Stopping movie');
    }
    changeMovie(movie) {
        console.log(`Changing movie to: ${movie}`);
    }
}

class Projector {
    turnOn() {
        console.log('Projector is turned on');
    }
    turnOff() {
        console.log('Projector is turned off');
    }
}

class SoundSystem {
    turnOn() {
        console.log('Sound system is turned on');
    }
    turnOff() {
        console.log('Sound system is turned off');
    }
    setVolume(volume) {
        console.log(`Setting volume to: ${volume}`);
    }
}
class HomeTheaterFacade {
  constructor() {
    this.dvdPlayer = new DVDPlayer();
    this.projector = new Projector();
    this.soundSystem = new SoundSystem();
  }

  watchMovie(movie) {
    this.projector.turnOn();
    this.soundSystem.turnOn();
    this.dvdPlayer.play(movie);
  }

  changeMovie(movie) {
    this.dvdPlayer.changeMovie(movie);
  }

  endMovie() {
    this.projector.turnOff();
    this.soundSystem.turnOff();
  }
}

// Usage
const homeTheater = new HomeTheaterFacade();
homeTheater.watchMovie('Inception');
homeTheater.changeMovie('Interstellar');
homeTheater.soundSystem.setVolume(10);
homeTheater.endMovie();