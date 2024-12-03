import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsElasticBeanstalkApplicationVersionArgs {
  application: string;
  bucket: string;
  description?: string;
  force_delete?: boolean;
  key: string;
  name: string;
  process?: boolean;
  tags?: {
    [key: string]: string;
  };
}
export class aws_elastic_beanstalk_application_version extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsElasticBeanstalkApplicationVersionArgs) {
    super(config, "resource", args, resourceName, "aws_elastic_beanstalk_application_version");
  }
}