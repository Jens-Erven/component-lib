import {
  Delete,
  Edit,
  Email,
  LocationOn,
  MoreVert,
  Phone,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

export interface ProfileCardProps {
  /**
   * User's name
   */
  name: string;
  /**
   * User's role or title
   */
  role: string;
  /**
   * User's avatar URL
   */
  avatarUrl?: string;
  /**
   * User's email address
   */
  email?: string;
  /**
   * User's phone number
   */
  phone?: string;
  /**
   * User's location
   */
  location?: string;
  /**
   * Skills or tags to display
   */
  skills?: string[];
  /**
   * User's bio or description
   */
  bio?: string;
  /**
   * Card elevation
   */
  elevation?: number;
  /**
   * Card variant
   */
  variant?: "elevation" | "outlined";
  /**
   * Whether to show action buttons
   */
  showActions?: boolean;
  /**
   * Whether to show the more options button
   */
  showMoreOptions?: boolean;
  /**
   * Callback when View Profile is clicked
   */
  onViewProfile?: () => void;
  /**
   * Callback when Message is clicked
   */
  onMessage?: () => void;
  /**
   * Callback when Edit is clicked
   */
  onEdit?: () => void;
  /**
   * Callback when Delete is clicked
   */
  onDelete?: () => void;
  /**
   * Callback when More Options is clicked
   */
  onMoreOptions?: () => void;
}

/**
 * ProfileCard component that combines multiple Material-UI components
 * to display user profile information in a card format.
 */
export const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  role,
  avatarUrl,
  email,
  phone,
  location,
  skills = [],
  bio,
  elevation = 3,
  variant = "elevation",
  showActions = true,
  showMoreOptions = true,
  onViewProfile,
  onMessage,
  onEdit,
  onDelete,
  onMoreOptions,
}) => {
  return (
    <Card
      elevation={elevation}
      variant={variant}
      sx={{ maxWidth: 400, width: "100%" }}
    >
      {/* Header with Avatar and More Options */}
      <Box sx={{ position: "relative", pt: 2, px: 2 }}>
        {showMoreOptions && (
          <IconButton
            sx={{ position: "absolute", top: 8, right: 8 }}
            onClick={onMoreOptions}
            size="small"
          >
            <MoreVert />
          </IconButton>
        )}

        <Stack alignItems="center" spacing={1}>
          <Avatar
            src={avatarUrl}
            alt={name}
            sx={{
              width: 80,
              height: 80,
              bgcolor: "primary.main",
              fontSize: "2rem",
            }}
          >
            {!avatarUrl && name.charAt(0).toUpperCase()}
          </Avatar>

          <Typography
            variant="h6"
            component="h2"
            fontWeight="bold"
            textAlign="center"
          >
            {name}
          </Typography>

          <Typography variant="body2" color="text.secondary" textAlign="center">
            {role}
          </Typography>
        </Stack>
      </Box>

      <CardContent sx={{ pt: 2 }}>
        {/* Bio */}
        {bio && (
          <Typography
            variant="body2"
            color="text.secondary"
            paragraph
            textAlign="center"
          >
            {bio}
          </Typography>
        )}

        {/* Contact Information */}
        {(email || phone || location) && (
          <Stack spacing={1} sx={{ mb: 2 }}>
            <Divider />
            {email && (
              <Stack direction="row" spacing={1} alignItems="center">
                <Email fontSize="small" color="action" />
                <Typography variant="body2" color="text.secondary">
                  {email}
                </Typography>
              </Stack>
            )}
            {phone && (
              <Stack direction="row" spacing={1} alignItems="center">
                <Phone fontSize="small" color="action" />
                <Typography variant="body2" color="text.secondary">
                  {phone}
                </Typography>
              </Stack>
            )}
            {location && (
              <Stack direction="row" spacing={1} alignItems="center">
                <LocationOn fontSize="small" color="action" />
                <Typography variant="body2" color="text.secondary">
                  {location}
                </Typography>
              </Stack>
            )}
            <Divider />
          </Stack>
        )}

        {/* Skills */}
        {skills.length > 0 && (
          <Box sx={{ mt: 2 }}>
            <Typography variant="caption" color="text.secondary" gutterBottom>
              Skills
            </Typography>
            <Stack
              direction="row"
              spacing={1}
              sx={{ flexWrap: "wrap", gap: 1, mt: 1 }}
            >
              {skills.map((skill, index) => (
                <Chip
                  key={index}
                  label={skill}
                  size="small"
                  color="primary"
                  variant="outlined"
                />
              ))}
            </Stack>
          </Box>
        )}
      </CardContent>

      {/* Actions */}
      {showActions && (
        <CardActions sx={{ justifyContent: "space-between", px: 2, pb: 2 }}>
          <Stack direction="row" spacing={1}>
            <Button
              size="small"
              variant="contained"
              color="primary"
              onClick={onViewProfile}
            >
              View Profile
            </Button>
            <Button
              size="small"
              variant="outlined"
              color="primary"
              onClick={onMessage}
            >
              Message
            </Button>
          </Stack>
          <Stack direction="row" spacing={0.5}>
            {onEdit && (
              <IconButton size="small" color="primary" onClick={onEdit}>
                <Edit fontSize="small" />
              </IconButton>
            )}
            {onDelete && (
              <IconButton size="small" color="error" onClick={onDelete}>
                <Delete fontSize="small" />
              </IconButton>
            )}
          </Stack>
        </CardActions>
      )}
    </Card>
  );
};
