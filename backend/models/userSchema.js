import mongoose, { mongo } from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, 'Name is required'],
    },
    username: {
      type: String,
      unique: true,
      required: [true, 'Username is required'],
    },
    email: {
      type: String,
      unique: true,
      required: [true, 'Email is required'],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      select: false,
    },
    age: { type: Number },
    weight: { type: Number },
    gender: { type: String, enum: ['male', 'female', 'elder thing', 'blob', 'other'] },
    fitnesLevel: {
      type: String,
      required: [true, 'Please state your current fitness level'],
      enum: ['beginner', 'intermediate', 'advanced'],
    },
    workoutAim: { type: String, enum: ['Muscle Worship', 'Fat Fight', 'Stamina Destruction', 'Cardio Crusade'] },
    avatar: {
      type: String,
      default: function () {
        switch (this.gender) {
          case 'male':
            return 'https://i.pinimg.com/736x/3e/42/b1/3e42b1c802226a211c690c9b02d06ffd.jpg';
          case 'female':
            return 'femaleAvatarUrl';
          case 'elder thing':
            return 'https://i.pinimg.com/474x/6c/92/36/6c923664f3c5fa0715fa82627a2fa04e.jpg';
          case 'blob':
            return 'https://e7.pngegg.com/pngimages/869/87/png-clipart-shoggoth-%E3%81%84%E3%82%89%E3%81%99%E3%81%A8%E3%82%84-illustrator-cthulhu-mythos-cthulhu-illustrator-fictional-character.png';
          case 'other':
            return 'https://t3.ftcdn.net/jpg/05/59/68/54/360_F_559685420_ZyC3yn4khaJ6gptajKVUPAs1Bl8kUvEL.jpg';
        }
      },
    },
    awards: {
      karmaPoints: {
        type: Number,
        default: 0,
      },
      title: {
        type: String,
        default: function () {
          return getTitle(this.awards.karmaPoints);
        },
      },
    },
  },
  // Timestamps
  { timestamps: true },
);

function getTitle(karmaPoints) {
  if (karmaPoints < 10) {
    return 'Cannon Fodder Cultist';
  } else if (karmaPoints < 20) {
    return 'Tentacle-Tickler Trainee';
  } else if (karmaPoints < 30) {
    return "Dagon's Dishwasher";
  } else if (karmaPoints < 40) {
    return "Cthulhu's Coffee Fetcher";
  } else if (karmaPoints < 50) {
    return 'Eldritch Errand Runner';
  } else if (karmaPoints < 60) {
    return "Deep One's Doormat";
  } else if (karmaPoints < 70) {
    return 'Paranormal Paper Pusher';
  } else if (karmaPoints < 80) {
    return "Great Old One's Goofball";
  } else if (karmaPoints < 90) {
    return 'Tentacle Tamer';
  } else if (karmaPoints < 100) {
    return 'Supreme Spookster';
  }
}

export default mongoose.model('User', userSchema);
