import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsS3BucketNotificationArgsLambdaFunction {
  events: string[];
  filter_prefix?: string;
  filter_suffix?: string;
  lambda_function_arn?: string;
}
export interface AwsS3BucketNotificationArgsqueue {
  events: string[];
  filter_prefix?: string;
  filter_suffix?: string;
  queue_arn: string;
}
export interface AwsS3BucketNotificationArgstopic {
  events: string[];
  filter_prefix?: string;
  filter_suffix?: string;
  topic_arn: string;
}
export interface AwsS3BucketNotificationArgs {
  bucket: string;
  eventbridge?: boolean;
  lambda_function: AwsS3BucketNotificationArgsLambdaFunction;
  queue: AwsS3BucketNotificationArgsqueue;
  topic: AwsS3BucketNotificationArgstopic;
}
export class aws_s3_bucket_notification extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsS3BucketNotificationArgs) {
    super(config, "resource", args, resourceName, "aws_s3_bucket_notification");
  }
}