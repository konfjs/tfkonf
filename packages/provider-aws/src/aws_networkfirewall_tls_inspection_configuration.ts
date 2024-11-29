import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsNetworkfirewallTlsInspectionConfigurationArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsNetworkfirewallTlsInspectionConfigurationArgsTlsInspectionConfigurationServerCertificateConfigurationCheckCertificateRevocationStatus {
  revoked_status_action?: string;
  unknown_status_action?: string;
}
export interface AwsNetworkfirewallTlsInspectionConfigurationArgsTlsInspectionConfigurationServerCertificateConfigurationScopeDestination {
  address_definition: string;
}
export interface AwsNetworkfirewallTlsInspectionConfigurationArgsTlsInspectionConfigurationServerCertificateConfigurationScopeDestinationPorts {
  from_port: number;
  to_port: number;
}
export interface AwsNetworkfirewallTlsInspectionConfigurationArgsTlsInspectionConfigurationServerCertificateConfigurationScopeSource {
  address_definition: string;
}
export interface AwsNetworkfirewallTlsInspectionConfigurationArgsTlsInspectionConfigurationServerCertificateConfigurationScopeSourcePorts {
  from_port: number;
  to_port: number;
}
export interface AwsNetworkfirewallTlsInspectionConfigurationArgsTlsInspectionConfigurationServerCertificateConfigurationScope {
  protocols: number[];
  destination: AwsNetworkfirewallTlsInspectionConfigurationArgsTlsInspectionConfigurationServerCertificateConfigurationScopeDestination;
  destination_ports: AwsNetworkfirewallTlsInspectionConfigurationArgsTlsInspectionConfigurationServerCertificateConfigurationScopeDestinationPorts;
  source: AwsNetworkfirewallTlsInspectionConfigurationArgsTlsInspectionConfigurationServerCertificateConfigurationScopeSource;
  source_ports: AwsNetworkfirewallTlsInspectionConfigurationArgsTlsInspectionConfigurationServerCertificateConfigurationScopeSourcePorts;
}
export interface AwsNetworkfirewallTlsInspectionConfigurationArgsTlsInspectionConfigurationServerCertificateConfigurationServerCertificate {
  resource_arn?: string;
}
export interface AwsNetworkfirewallTlsInspectionConfigurationArgsTlsInspectionConfigurationServerCertificateConfiguration {
  certificate_authority_arn?: string;
  check_certificate_revocation_status: AwsNetworkfirewallTlsInspectionConfigurationArgsTlsInspectionConfigurationServerCertificateConfigurationCheckCertificateRevocationStatus;
  scope: AwsNetworkfirewallTlsInspectionConfigurationArgsTlsInspectionConfigurationServerCertificateConfigurationScope;
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
  timeouts: AwsNetworkfirewallTlsInspectionConfigurationArgsTimeouts;
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