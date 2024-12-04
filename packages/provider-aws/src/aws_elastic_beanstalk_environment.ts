import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsElasticBeanstalkEnvironmentArgsSetting {
  name: string;
  namespace: string;
  resource?: string;
  value: string;
}

export interface AwsElasticBeanstalkEnvironmentArgs {
  application: string;
  description?: string;
  name: string;
  poll_interval?: string;
  tags?: { [key: string]: string };
  template_name?: string;
  tier?: string;
  wait_for_ready_timeout?: string;
  setting: AwsElasticBeanstalkEnvironmentArgsSetting;
}

export class aws_elastic_beanstalk_environment extends TerraformResource {
  readonly all_settings!: any[];
  readonly arn!: string;
  readonly autoscaling_groups!: string[];
  readonly cname!: string;
  readonly cname_prefix?: string;
  readonly endpoint_url!: string;
  readonly id?: string;
  readonly instances!: string[];
  readonly launch_configurations!: string[];
  readonly load_balancers!: string[];
  readonly platform_arn?: string;
  readonly queues!: string[];
  readonly solution_stack_name?: string;
  readonly tags_all?: { [key: string]: string };
  readonly triggers!: string[];
  readonly version_label?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsElasticBeanstalkEnvironmentArgs) {
    super(config, "resource", args, resourceName, "aws_elastic_beanstalk_environment");
  }
}
