import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsDatasyncLocationHdfsArgsNameNode {
  hostname: string;
  port: number;
}
export interface AwsDatasyncLocationHdfsArgsQopConfiguration {}
export interface AwsDatasyncLocationHdfsArgs {
  agent_arns: string[];
  authentication_type?: string;
  block_size?: number;
  kerberos_keytab?: string;
  kerberos_keytab_base64?: string;
  kerberos_krb5_conf?: string;
  kerberos_krb5_conf_base64?: string;
  kerberos_principal?: string;
  kms_key_provider_uri?: string;
  replication_factor?: number;
  simple_user?: string;
  subdirectory?: string;
  tags?: {
    [key: string]: string;
  };
  name_node: AwsDatasyncLocationHdfsArgsNameNode;
  qop_configuration: AwsDatasyncLocationHdfsArgsQopConfiguration;
}
export class aws_datasync_location_hdfs extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly uri!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsDatasyncLocationHdfsArgs) {
    super(config, "resource", args, resourceName, "aws_datasync_location_hdfs");
  }
}