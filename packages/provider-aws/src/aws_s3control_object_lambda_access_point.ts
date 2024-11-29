import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsS3controlObjectLambdaAccessPointArgsconfigurationTransformationConfigurationContentTransformationAwsLambda {
  function_arn: string;
  function_payload?: string;
}
export interface AwsS3controlObjectLambdaAccessPointArgsconfigurationTransformationConfigurationContentTransformation {
  aws_lambda: AwsS3controlObjectLambdaAccessPointArgsconfigurationTransformationConfigurationContentTransformationAwsLambda;
}
export interface AwsS3controlObjectLambdaAccessPointArgsconfigurationTransformationConfiguration {
  actions: string[];
  content_transformation: AwsS3controlObjectLambdaAccessPointArgsconfigurationTransformationConfigurationContentTransformation;
}
export interface AwsS3controlObjectLambdaAccessPointArgsconfiguration {
  allowed_features?: string[];
  cloud_watch_metrics_enabled?: boolean;
  supporting_access_point: string;
  transformation_configuration: AwsS3controlObjectLambdaAccessPointArgsconfigurationTransformationConfiguration;
}
export interface AwsS3controlObjectLambdaAccessPointArgs {
  name: string;
  configuration: AwsS3controlObjectLambdaAccessPointArgsconfiguration;
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