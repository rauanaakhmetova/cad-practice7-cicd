# cad-practice7-cicd
Practice 7: CI/CD with GitHub Actions + OIDC. Every push to main tests, builds the image (tag = commit SHA), pushes to ECR and deploys the CloudFormation stack p7-app to ECS Fargate.
