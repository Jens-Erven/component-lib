import type { Meta, StoryObj } from "@storybook/react";
import { ProfileCard } from "../components/ProfileCard";

const meta = {
  title: "Components/ProfileCard",
  component: ProfileCard,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "ProfileCard is a composite component that combines multiple Material-UI components (Card, Avatar, Typography, Chip, Button, etc.) to display user profile information in a visually appealing card format.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: "text",
      description: "User's name",
    },
    role: {
      control: "text",
      description: "User's role or title",
    },
    avatarUrl: {
      control: "text",
      description: "URL for the user's avatar image",
    },
    email: {
      control: "text",
      description: "User's email address",
    },
    phone: {
      control: "text",
      description: "User's phone number",
    },
    location: {
      control: "text",
      description: "User's location",
    },
    bio: {
      control: "text",
      description: "User's bio or description",
    },
    skills: {
      control: "object",
      description: "Array of skills to display as chips",
    },
    elevation: {
      control: { type: "range", min: 0, max: 24, step: 1 },
      description: "Card elevation (shadow depth)",
    },
    variant: {
      control: "select",
      options: ["elevation", "outlined"],
      description: "Card variant style",
    },
    showActions: {
      control: "boolean",
      description: "Whether to show action buttons",
    },
    showMoreOptions: {
      control: "boolean",
      description: "Whether to show the more options button",
    },
  },
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default profile card with all features enabled.
 */
export const Default: Story = {
  args: {
    name: "Sarah Johnson",
    role: "Senior Software Engineer",
    email: "sarah.johnson@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    bio: "Passionate about building scalable web applications and mentoring junior developers.",
    skills: ["React", "TypeScript", "Node.js", "AWS"],
    elevation: 3,
    variant: "elevation",
    showActions: true,
    showMoreOptions: true,
    onViewProfile: () => console.log("View Profile clicked"),
    onMessage: () => console.log("Message clicked"),
    onEdit: () => console.log("Edit clicked"),
    onDelete: () => console.log("Delete clicked"),
    onMoreOptions: () => console.log("More Options clicked"),
  },
};

/**
 * Profile card without avatar image (shows initial).
 */
export const WithoutAvatar: Story = {
  args: {
    name: "John Doe",
    role: "Product Manager",
    email: "john.doe@example.com",
    location: "New York, NY",
    bio: "Leading product strategy and roadmap for innovative solutions.",
    skills: ["Product Strategy", "Agile", "UX Design"],
    onViewProfile: () => console.log("View Profile clicked"),
    onMessage: () => console.log("Message clicked"),
  },
};

/**
 * Profile card with avatar image.
 */
export const WithAvatar: Story = {
  args: {
    name: "Emma Wilson",
    role: "UX/UI Designer",
    avatarUrl: "https://i.pravatar.cc/150?img=47",
    email: "emma.wilson@example.com",
    phone: "+1 (555) 987-6543",
    location: "Austin, TX",
    bio: "Creating beautiful and intuitive user experiences.",
    skills: ["Figma", "Adobe XD", "User Research", "Prototyping"],
    onViewProfile: () => console.log("View Profile clicked"),
    onMessage: () => console.log("Message clicked"),
  },
};

/**
 * Minimal profile card with only essential information.
 */
export const Minimal: Story = {
  args: {
    name: "Michael Chen",
    role: "Data Scientist",
    showActions: false,
    showMoreOptions: false,
  },
};

/**
 * Profile card without contact information.
 */
export const NoContactInfo: Story = {
  args: {
    name: "Lisa Anderson",
    role: "Marketing Director",
    bio: "Driving growth through innovative marketing strategies.",
    skills: ["Digital Marketing", "SEO", "Content Strategy"],
    onViewProfile: () => console.log("View Profile clicked"),
    onMessage: () => console.log("Message clicked"),
  },
};

/**
 * Profile card with many skills.
 */
export const ManySkills: Story = {
  args: {
    name: "David Kim",
    role: "Full Stack Developer",
    email: "david.kim@example.com",
    location: "Seattle, WA",
    bio: "Building end-to-end solutions with modern technologies.",
    skills: [
      "React",
      "Vue.js",
      "Angular",
      "Node.js",
      "Python",
      "Django",
      "PostgreSQL",
      "MongoDB",
      "AWS",
      "Docker",
      "Kubernetes",
      "GraphQL",
    ],
    onViewProfile: () => console.log("View Profile clicked"),
    onMessage: () => console.log("Message clicked"),
  },
};

/**
 * Outlined variant of the profile card.
 */
export const OutlinedVariant: Story = {
  args: {
    name: "Rachel Green",
    role: "Business Analyst",
    email: "rachel.green@example.com",
    phone: "+1 (555) 246-8135",
    location: "Chicago, IL",
    bio: "Analyzing data to drive business decisions and growth.",
    skills: ["SQL", "Tableau", "Excel", "Business Intelligence"],
    variant: "outlined",
    elevation: 0,
    onViewProfile: () => console.log("View Profile clicked"),
    onMessage: () => console.log("Message clicked"),
  },
};

/**
 * Profile card with edit and delete actions.
 */
export const WithEditDelete: Story = {
  args: {
    name: "Tom Harris",
    role: "DevOps Engineer",
    email: "tom.harris@example.com",
    location: "Boston, MA",
    bio: "Automating infrastructure and improving deployment pipelines.",
    skills: ["Docker", "Kubernetes", "CI/CD", "Terraform"],
    onViewProfile: () => console.log("View Profile clicked"),
    onMessage: () => console.log("Message clicked"),
    onEdit: () => console.log("Edit clicked"),
    onDelete: () => console.log("Delete clicked"),
  },
};

/**
 * Low elevation profile card.
 */
export const LowElevation: Story = {
  args: {
    name: "Sophia Martinez",
    role: "Content Writer",
    email: "sophia.martinez@example.com",
    location: "Los Angeles, CA",
    bio: "Crafting compelling stories and engaging content.",
    skills: ["Copywriting", "Content Marketing", "SEO Writing"],
    elevation: 1,
    onViewProfile: () => console.log("View Profile clicked"),
    onMessage: () => console.log("Message clicked"),
  },
};

/**
 * High elevation profile card.
 */
export const HighElevation: Story = {
  args: {
    name: "James Brown",
    role: "Solutions Architect",
    avatarUrl: "https://i.pravatar.cc/150?img=12",
    email: "james.brown@example.com",
    phone: "+1 (555) 369-2580",
    location: "Miami, FL",
    bio: "Designing scalable and resilient cloud architectures.",
    skills: ["AWS", "Azure", "Microservices", "System Design"],
    elevation: 12,
    onViewProfile: () => console.log("View Profile clicked"),
    onMessage: () => console.log("Message clicked"),
  },
};



