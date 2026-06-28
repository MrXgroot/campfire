import mongoose from "mongoose";

const campSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      maxlength: 150,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    content: {
      type: String,
      required: true,
      trim: true,
      minlength: 10,
      maxlength: 5000,
    },

    authorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    communityId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Community",
      required: true,
      index: true,
    },

    tags: [
      {
        type: String,
        trim: true,
        lowercase: true,
      },
    ],

    media: [
      {
        url: {
          type: String,
          required: true,
        },

        publicId: {
          type: String,
          required: true,
        },

        type: {
          type: String,
          enum: ["image", "video"],
          required: true,
        },
      },
    ],

    metrics: {
      votes: {
        type: Number,
        default: 0,
      },

      comments: {
        type: Number,
        default: 0,
      },

      views: {
        type: Number,
        default: 0,
      },

      shares: {
        type: Number,
        default: 0,
      },
    },

    status: {
      type: String,
      enum: ["published", "archived", "deleted"],
      default: "published",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

// campSchema.index({ slug: 1 }, { unique: true });

// campSchema.index({ communityId: 1 });

// campSchema.index({ authorId: 1 });

const Camp = mongoose.model("Camp", campSchema);

export default Camp;
