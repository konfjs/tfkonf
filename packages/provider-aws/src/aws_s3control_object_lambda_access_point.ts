import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsS3controlObjectLambdaAccessPointArgsConfigurationTransformationConfigurationContentTransformationAwsLambda {
  function_arn: string;
  function_payload?: string;
}

export interface AwsS3controlObjectLambdaAccessPointArgsConfigurationTransformationConfigurationContentTransformation {
  aws_lambda: AwsS3controlObjectLambdaAccessPointArgsConfigurationTransformationConfigurationContentTransformationAwsLambda;
}

export interface AwsS3controlObjectLambdaAccessPointArgsConfigurationTransformationConfiguration {
  actions: string[];
  content_transformation: AwsS3controlObjectLambdaAccessPointArgsConfigurationTransformationConfigurationContentTransformation;
}

export interface AwsS3controlObjectLambdaAccessPointArgsConfiguration {
  allowed_features?: string[];
  cloud_watch_metrics_enabled?: boolean;
  supporting_access_point: string;
  transformation_configuration: AwsS3controlObjectLambdaAccessPointArgsConfigurationTransformationConfiguration;
}

export interface AwsS3controlObjectLambdaAccessPointArgs {
  name: string;
  configuration: AwsS3controlObjectLambdaAccessPointArgsConfiguration;
}

export class aws_s3control_object_lambda_access_point extends TerraformResource {
  readonly account_id?: string;
  readonly alias!: string;
  readonly arn!: string;
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsS3controlObjectLambdaAccessPointArgs) {
    super(config, "resource", args, resourceName, "aws_s3control_object_lambda_access_point");
  }
}
