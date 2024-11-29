import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsElasticBeanstalkConfigurationTemplateArgssetting {
  name: string;
  namespace: string;
  resource?: string;
  value: string;
}
export interface AwsElasticBeanstalkConfigurationTemplateArgs {
  application: string;
  description?: string;
  environment_id?: string;
  name: string;
  solution_stack_name?: string;
  setting: AwsElasticBeanstalkConfigurationTemplateArgssetting;
}
export class aws_elastic_beanstalk_configuration_template extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsElasticBeanstalkConfigurationTemplateArgs) {
    super(config, "resource", args, resourceName, "aws_elastic_beanstalk_configuration_template");
  }
}