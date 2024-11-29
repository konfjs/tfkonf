import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsNetworkfirewallTlsInspectionConfigurationArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsNetworkfirewallTlsInspectionConfigurationArgsTlsInspectionConfigurationServerCertificateConfigurationCheckCertificateRevocationStatus {
  revoked_status_action?: string;
  unknown_status_action?: string;
}
export interface AwsNetworkfirewallTlsInspectionConfigurationArgsTlsInspectionConfigurationServerCertificateConfigurationscopedestination {
  address_definition: string;
}
export interface AwsNetworkfirewallTlsInspectionConfigurationArgsTlsInspectionConfigurationServerCertificateConfigurationscopeDestinationPorts {
  from_port: number;
  to_port: number;
}
export interface AwsNetworkfirewallTlsInspectionConfigurationArgsTlsInspectionConfigurationServerCertificateConfigurationscopesource {
  address_definition: string;
}
export interface AwsNetworkfirewallTlsInspectionConfigurationArgsTlsInspectionConfigurationServerCertificateConfigurationscopeSourcePorts {
  from_port: number;
  to_port: number;
}
export interface AwsNetworkfirewallTlsInspectionConfigurationArgsTlsInspectionConfigurationServerCertificateConfigurationscope {
  protocols: number[];
  destination: AwsNetworkfirewallTlsInspectionConfigurationArgsTlsInspectionConfigurationServerCertificateConfigurationscopedestination;
  destination_ports: AwsNetworkfirewallTlsInspectionConfigurationArgsTlsInspectionConfigurationServerCertificateConfigurationscopeDestinationPorts;
  source: AwsNetworkfirewallTlsInspectionConfigurationArgsTlsInspectionConfigurationServerCertificateConfigurationscopesource;
  source_ports: AwsNetworkfirewallTlsInspectionConfigurationArgsTlsInspectionConfigurationServerCertificateConfigurationscopeSourcePorts;
}
export interface AwsNetworkfirewallTlsInspectionConfigurationArgsTlsInspectionConfigurationServerCertificateConfigurationServerCertificate {
  resource_arn?: string;
}
export interface AwsNetworkfirewallTlsInspectionConfigurationArgsTlsInspectionConfigurationServerCertificateConfiguration {
  certificate_authority_arn?: string;
  check_certificate_revocation_status: AwsNetworkfirewallTlsInspectionConfigurationArgsTlsInspectionConfigurationServerCertificateConfigurationCheckCertificateRevocationStatus;
  scope: AwsNetworkfirewallTlsInspectionConfigurationArgsTlsInspectionConfigurationServerCertificateConfigurationscope;
  server_certificate: AwsNetworkfirewallTlsInspectionConfigurationArgsTlsInspectionConfigurationServerCertificateConfigurationServerCertificate;
}
export interface AwsNetworkfirewallTlsInspectionConfigurationArgsTlsInspectionConfiguration {
  server_certificate_configuration: AwsNetworkfirewallTlsInspectionConfigurationArgsTlsInspectionConfigurationServerCertificateConfiguration;
}
export interface AwsNetworkfirewallTlsInspectionConfigurationArgs {
  description?: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  timeouts: AwsNetworkfirewallTlsInspectionConfigurationArgstimeouts;
  tls_inspection_configuration: AwsNetworkfirewallTlsInspectionConfigurationArgsTlsInspectionConfiguration;
}
export class aws_networkfirewall_tls_inspection_configuration extends TerraformResource {
  readonly arn!: string;
  readonly certificate_authority!: any[];
  readonly certificates!: any[];
  readonly encryption_configuration?: any[];
  readonly id!: string;
  readonly number_of_associations!: number;
  readonly tags_all!: {
    [key: string]: string;
  };
  readonly tls_inspection_configuration_id!: string;
  readonly update_token!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsNetworkfirewallTlsInspectionConfigurationArgs) {
    super(config, "resource", args, resourceName, "aws_networkfirewall_tls_inspection_configuration");
  }
}