import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsS3BucketNotificationArgsLambdaFunction {
  events: string[];
  filter_prefix?: string;
  filter_suffix?: string;
  lambda_function_arn?: string;
}
export interface AwsS3BucketNotificationArgsQueue {
  events: string[];
  filter_prefix?: string;
  filter_suffix?: string;
  queue_arn: string;
}
export interface AwsS3BucketNotificationArgsTopic {
  events: string[];
  filter_prefix?: string;
  filter_suffix?: string;
  topic_arn: string;
}
export interface AwsS3BucketNotificationArgs {
  bucket: string;
  eventbridge?: boolean;
  lambda_function: AwsS3BucketNotificationArgsLambdaFunction;
  queue: AwsS3BucketNotificationArgsQueue;
  topic: AwsS3BucketNotificationArgsTopic;
}
export class aws_s3_bucket_notification extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsS3BucketNotificationArgs) {
    super(config, "resource", args, resourceName, "aws_s3_bucket_notification");
  }
}