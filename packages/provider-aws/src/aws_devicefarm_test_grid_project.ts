import { TerraformConfig, TerraformResource } from "tfs";
export interface VpcConfig {
  security_group_ids: string[];
  subnet_ids: string[];
  vpc_id: string;
}
export interface AwsDevicefarmTestGridProjectArgs {
  description?: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  vpc_config: VpcConfig;
}
export class aws_devicefarm_test_grid_project extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsDevicefarmTestGridProjectArgs) {
    super(config, "resource", args, resourceName, "aws_devicefarm_test_grid_project");
  }
}