import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDatasyncLocationObjectStorageArgs {
  access_key?: string;
  agent_arns: string[];
  bucket_name: string;
  secret_key?: string;
  server_certificate?: string;
  server_hostname: string;
  server_port?: number;
  server_protocol?: string;
  tags?: { [key: string]: string };
}

export class aws_datasync_location_object_storage extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly subdirectory?: string;
  readonly tags_all?: { [key: string]: string };
  readonly uri!: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsDatasyncLocationObjectStorageArgs) {
    super(config, "resource", args, resourceName, "aws_datasync_location_object_storage");
  }
}
