import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsMskconnectWorkerConfigurationArgsTimeouts {
  delete?: string;
}
export interface AwsMskconnectWorkerConfigurationArgs {
  description?: string;
  name: string;
  properties_file_content: string;
  tags?: {
    [key: string]: string;
  };
  timeouts: AwsMskconnectWorkerConfigurationArgsTimeouts;
}
export class aws_mskconnect_worker_configuration extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly latest_revision!: number;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsMskconnectWorkerConfigurationArgs) {
    super(config, "resource", args, resourceName, "aws_mskconnect_worker_configuration");
  }
}