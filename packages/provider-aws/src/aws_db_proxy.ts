import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDbProxyArgsAuth {
  auth_scheme?: string;
  description?: string;
  iam_auth?: string;
  secret_arn?: string;
  username?: string;
}

export interface AwsDbProxyArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsDbProxyArgs {
  debug_logging?: boolean;
  engine_family: string;
  name: string;
  require_tls?: boolean;
  role_arn: string;
  tags?: { [key: string]: string };
  vpc_subnet_ids: string[];
  auth: AwsDbProxyArgsAuth;
  timeouts?: AwsDbProxyArgsTimeouts;
}

export class aws_db_proxy extends TerraformResource {
  readonly arn!: string;
  readonly endpoint!: string;
  readonly id?: string;
  readonly idle_client_timeout?: number;
  readonly tags_all?: { [key: string]: string };
  readonly vpc_security_group_ids?: string[];

  constructor(config: TerraformConfig, resourceName: string, args: AwsDbProxyArgs) {
    super(config, "resource", args, resourceName, "aws_db_proxy");
  }
}
