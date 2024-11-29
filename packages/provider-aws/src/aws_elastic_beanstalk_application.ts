import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsElasticBeanstalkApplicationArgsAppversionLifecycle {
  delete_source_from_s3?: boolean;
  max_age_in_days?: number;
  max_count?: number;
  service_role: string;
}
export interface AwsElasticBeanstalkApplicationArgs {
  description?: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  appversion_lifecycle: AwsElasticBeanstalkApplicationArgsAppversionLifecycle;
}
export class aws_elastic_beanstalk_application extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsElasticBeanstalkApplicationArgs) {
    super(config, "resource", args, resourceName, "aws_elastic_beanstalk_application");
  }
}