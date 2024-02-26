terraform {
    required_providers {
      aws = {
        source = "hashicorp/aws"
        version = "5.35.0"
      }
    }
}

provider "aws" {
    region = "us-east-1"
    access_key = var.aws_aki
    secret_key = var.aws_sak
}