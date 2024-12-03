import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsGlueDevEndpointArgs {
  arguments?: {
    [key: string]: string;
  };
  extra_jars_s3_path?: string;
  extra_python_libs_s3_path?: string;
  glue_version?: string;
  name: string;
  number_of_nodes?: number;
  number_of_workers?: number;
  public_key?: string;
  public_keys?: string[];
  role_arn: string;
  security_configuration?: string;
  security_group_ids?: string[];
  subnet_id?: string;
  tags?: {
    [key: string]: string;
  };
  worker_type?: string;
}
export class aws_glue_dev_endpoint extends TerraformResource {
  readonly arn!: string;
  readonly availability_zone!: string;
  readonly failure_reason!: string;
  readonly id?: string;
  readonly private_address!: string;
  readonly public_address!: string;
  readonly status!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly vpc_id!: string;
  readonly yarn_endpoint_address!: string;
  readonly zeppelin_remote_spark_interpreter_port!: number;
  constructor(config: TerraformConfig, resourceName: string, args: AwsGlueDevEndpointArgs) {
    super(config, "resource", args, resourceName, "aws_glue_dev_endpoint");
  }
}