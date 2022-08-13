# Node AWS

API simples em Node com deploy nos serviços da AWS

Projeto utilizado para praticar conhecimentos em Node, Docker e serviços em nuvem.

## Tecnologias usadas

- Docker
- AWS ECS
- Github actions
- Typescript
- Express

## Como rodar

1. Configure sua task definition do AWS ECS no arquivo `.aws/task-definition.json`
2. Configure as seguintes secrets no repositório do github para que o workflow `aws.yaml` faça o deploy corretamente:

```yaml
AWS_ACCESS_KEY_ID: aws-key-id # From your AWS Credentials
AWS_SECRET_ACCESS_KEY: super-secret # From your AWS Credentials
AWS_REGION: sa-east-1 # Your favorite AWS region
AWS_ECS_CLUSTER: cluster-name # AWS ECS cluster name
AWS_ECS_SERVICE: service-name # AWS ECS service name
AWS_ECR_REPOSITORY: service-name # AWS ECR repository name
```

## Como funciona

1. O workflow `aws.yaml` fará o build da imagem docker baseado no arquivo `Dockerfile`.
2. A imagem buildada será enviada para o repositório ECR com a tag `latest`
3. O cluster ECS fará o deploy do container com a imagem atualizada
