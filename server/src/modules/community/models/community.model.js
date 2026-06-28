import mongoose from "mongoose";

const communitySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 50,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
      minlength: 10,
      maxlength: 500,
    },

    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    avatar: {
      type: String,
      default: null,
    },

    banner: {
      type: String,
      default: null,
    },

    metrics: {
      members: {
        type: Number,
        default: 1,
      },

      camps: {
        type: Number,
        default: 0,
      },
    },

    status: {
      type: String,
      enum: ["active", "archived"],
      default: "active",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const Community = mongoose.model("Community", communitySchema);

export default Community;
