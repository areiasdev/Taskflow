"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Alert,
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import { useAuth } from "@/lib/auth/authContext";

export default function AuthPage() {
  const { login, register } = useAuth();
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const resetForm = () => {
    setFullName("");
    setEmail("");
    setPassword("");
    setError("");
  };

  const handleTabChange = (_: React.SyntheticEvent, value: number) => {
    setIsLogin(value === 0);
    resetForm();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    try {
      if (isLogin) {
        await login(email, password);
      } else {
        await register(fullName, email, password);
      }
      router.push("/projects");
    } catch {
      setError(
        isLogin
          ? "Invalid email or password."
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const textFieldSlotProps = {
    inputLabel: { className: "text-text-secondary" },
    input: { className: "text-text-primary rounded-xl" },
  };

  return (
    <Box className="min-h-screen grid lg:grid-cols-2">

      <Box className="hidden lg:flex flex-col justify-between bg-panel p-12">
        <Stack direction="row" alignItems="center" spacing={1.5}>
          <Box className="w-9 h-9 rounded-xl bg-accent flex items-center justify-center shrink-0">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <rect x="2" y="2" width="6" height="6" rx="1.5" fill="rgb(var(--color-accent-fg))" />
              <rect x="10" y="2" width="6" height="6" rx="1.5" fill="rgb(var(--color-accent-fg))" opacity="0.5" />
              <rect x="2" y="10" width="6" height="6" rx="1.5" fill="rgb(var(--color-accent-fg))" opacity="0.5" />
              <rect x="10" y="10" width="6" height="6" rx="1.5" fill="rgb(var(--color-accent-fg))" />
            </svg>
          </Box>
          <Typography className="!font-semibold tracking-tight text-panel-text">
            TaskFlow
          </Typography>
        </Stack>

        <Box>
          <Typography
            variant="h4"
            className="text-panel-text !font-semibold leading-tight tracking-tight !mb-4"
          >
            Your work,{" "}
            <Box component="span" className="text-accent italic">
              finally
            </Box>
            <br />
            in one place.
          </Typography>
          <Typography variant="body2" className="text-panel-muted leading-relaxed max-w-xs">
            Manage projects, track tasks, and collaborate with your team — all
            from a single, clear workspace.
          </Typography>
        </Box>

        <Stack direction="row" alignItems="center" spacing={0.75}>
          <Box className="w-5 h-1.5 rounded-full bg-accent" />
          <Box className="w-1.5 h-1.5 rounded-full bg-panel-muted opacity-40" />
          <Box className="w-1.5 h-1.5 rounded-full bg-panel-muted opacity-40" />
        </Stack>
      </Box>

      <Box className="flex items-center justify-center bg-page p-8">
        <Container maxWidth="xs">
          <Paper
            elevation={0}
            className="rounded-2xl overflow-hidden border border-border bg-surface-raised"
          >
            <Tabs
              value={isLogin ? 0 : 1}
              onChange={handleTabChange}
              variant="fullWidth"
              className="bg-tab-bg"
              TabIndicatorProps={{ className: "bg-brand" }}
            >
              <Tab
                label="Sign in"
                className="!font-semibold text-tab-text !normal-case"
              />
              <Tab
                label="Create account"
                className="!font-semibold text-tab-text !normal-case"
              />
            </Tabs>

            <Box
              component="form"
              onSubmit={handleSubmit}
              className="p-8 flex flex-col gap-5"
            >
              <Stack spacing={0.5}>
                <Typography
                  variant="h5"
                  className="!font-semibold text-text-primary tracking-tight"
                >
                  {isLogin ? "Welcome back." : "Get started."}
                </Typography>
                <Typography variant="body2" className="text-text-muted">
                  {isLogin
                    ? "Sign in to continue to your workspace."
                    : "Create your free account in seconds."}
                </Typography>
              </Stack>

              {error && <Alert severity="error">{error}</Alert>}

              {!isLogin && (
                <TextField
                  label="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  fullWidth
                  autoComplete="name"
                  slotProps={textFieldSlotProps}
                />
              )}

              <TextField
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                fullWidth
                autoComplete="email"
                slotProps={textFieldSlotProps}
              />

              <TextField
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                fullWidth
                autoComplete={isLogin ? "current-password" : "new-password"}
                slotProps={textFieldSlotProps}
              />

              <Button
                type="submit"
                variant="contained"
                disabled={isLoading}
                fullWidth
                disableElevation
                className="!bg-brand hover:!bg-brand-hover active:!bg-brand-active disabled:!bg-brand-disabled !text-page !font-semibold !py-3 !rounded-xl !normal-case tracking-tight"
              >
                {isLoading
                  ? isLogin ? "Signing in…" : "Creating account…"
                  : isLogin ? "Sign in"    : "Create account"}
              </Button>

              <Typography variant="caption" className="text-center text-text-muted">
                {isLogin ? "Don't have an account? " : "Already have an account? "}
                <Box
                  component="span"
                  onClick={() => {
                    setIsLogin((prev) => !prev);
                    resetForm();
                  }}
                  className="text-text-secondary !font-medium cursor-pointer hover:underline"
                >
                  {isLogin ? "Sign up" : "Sign in"}
                </Box>
              </Typography>
            </Box>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
}