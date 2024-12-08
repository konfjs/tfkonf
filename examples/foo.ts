import { TerraformConfig } from '@tfkonf/core';
import { Import, Locals, Terraform, Variable } from '@tfkonf/core';
import { google_access_context_manager_access_levels } from '@tfkonf/provider-google/google_access_context_manager_access_levels';
import { google_alloydb_cluster } from '@tfkonf/provider-google/google_alloydb_cluster';
import { google_service_account } from '@tfkonf/provider-google/google_service_account';
import { google_service_account_iam_member } from '@tfkonf/provider-google/google_service_account_iam_member';

const m = new TerraformConfig('foo.tf');

new google_access_context_manager_access_levels(m, 'foo', {
    parent: 'awd',
    access_levels: [
        {
            name: 'fooo',
            title: 'barrr',
            basic: {
                conditions: [
                    {
                        device_policy: {
                            allowed_device_management_levels: ['HIGH'],
                            require_admin_approval: true,
                        },
                        ip_subnetworks: ['foo'],
                    },
                ],
            },
            custom: {
                expr: {
                    expression: 'foo',
                },
            },
        },
    ],
});

new Terraform(m, {
    backend: {
        // local: {},
        remote: {
            hostname: 'app.terraform.io',
            organization: 'my-org',
            workspaces: {
                name: 'my-workspace',
            },
        },
    },
    provider_meta: {
        google: {
            foo: 'bar',
        },
        'google-beta': {
            foo2: 'bar2',
        },
    },
    required_providers: {
        aws: {
            source: 'hashicorp/aws',
            version: '>= 3.43.0',
        },
        hcp: {
            source: 'hashicorp/hcp',
            version: '>= 0.18.0',
        },
    },
    cloud: {
        workspaces: {
            name: 'my-workspace',
            project: 'my-project',
            tags: ['foo', 'bar'],
        },
        hostname: 'app.terraform.io',
        organization: 'my-org',
        token: 'foo',
    },
});

const alloy = new google_alloydb_cluster(m, 'my-cluster', {
    cluster_id: 'foo',
    location: 'us-central1',
});

const sa = new google_service_account(m, 'my-service-account', {
    account_id: 'foo',
    description: alloy.location,
    timeouts: {
        create: '10m',
    },
});

new google_service_account_iam_member(m, 'my-iam-member', {
    service_account_id: sa.account_id,
    role: 'roles/iam.Admin',
    member: 'group:foo@bar.com',
});

const l = new Locals(m, {
    foooooooooo: 'bar',
    bazzzzz: {
        foo22222: 'bar2',
    },
});

const v = new Variable(m, 'cluster_name22', {
    type: 'list(string)',
    default: ['foo', 'bar'],
    validation: {
        condition: true,
        error_message: 'foo',
    },
});

new Import(m, {
    id: 'my-cluster',
    to: 'google_container_cluster.my-cluster.name',
});

m.save();
