import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsLambda {
  function_arn: string;
  function_payload?: string;
}
export interface ContentTransformation {
  aws_lambda: AwsLambda;
}
export interface TransformationConfiguration {
  actions: string[];
  content_transformation: ContentTransformation;
}
export interface Configuration {
  allowed_features?: string[];
  cloud_watch_metrics_enabled?: boolean;
  supporting_access_point: string;
  transformation_configuration: TransformationConfiguration;
}
export interface AwsS3controlObjectLambdaAccessPointArgs {
  name: string;
  configuration: Configuration;
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