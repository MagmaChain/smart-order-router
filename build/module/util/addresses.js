import { ChainId, CHAIN_TO_ADDRESSES_MAP, Token } from '@uniswap/sdk-core';
import { FACTORY_ADDRESS } from '@uniswap/v3-sdk';
import { NETWORKS_WITH_SAME_UNISWAP_ADDRESSES } from './chains';
export const BNB_TICK_LENS_ADDRESS = CHAIN_TO_ADDRESSES_MAP[ChainId.BNB].tickLensAddress;
export const BNB_NONFUNGIBLE_POSITION_MANAGER_ADDRESS = CHAIN_TO_ADDRESSES_MAP[ChainId.BNB].nonfungiblePositionManagerAddress;
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const BNB_SWAP_ROUTER_02_ADDRESS = CHAIN_TO_ADDRESSES_MAP[ChainId.BNB].swapRouter02Address;
export const BNB_V3_MIGRATOR_ADDRESS = CHAIN_TO_ADDRESSES_MAP[ChainId.BNB].v3MigratorAddress;
export const V3_CORE_FACTORY_ADDRESSES = {
    ...constructSameAddressMap(FACTORY_ADDRESS),
    [ChainId.CELO]: CHAIN_TO_ADDRESSES_MAP[ChainId.CELO].v3CoreFactoryAddress,
    [ChainId.CELO_ALFAJORES]: CHAIN_TO_ADDRESSES_MAP[ChainId.CELO_ALFAJORES].v3CoreFactoryAddress,
    [ChainId.OPTIMISM_GOERLI]: CHAIN_TO_ADDRESSES_MAP[ChainId.OPTIMISM_GOERLI].v3CoreFactoryAddress,
    [ChainId.SEPOLIA]: CHAIN_TO_ADDRESSES_MAP[ChainId.SEPOLIA].v3CoreFactoryAddress,
    [ChainId.ARBITRUM_GOERLI]: CHAIN_TO_ADDRESSES_MAP[ChainId.ARBITRUM_GOERLI].v3CoreFactoryAddress,
    [ChainId.BNB]: CHAIN_TO_ADDRESSES_MAP[ChainId.BNB].v3CoreFactoryAddress,
    [ChainId.AVALANCHE]: CHAIN_TO_ADDRESSES_MAP[ChainId.AVALANCHE].v3CoreFactoryAddress,
    [ChainId.BASE_GOERLI]: CHAIN_TO_ADDRESSES_MAP[ChainId.BASE_GOERLI].v3CoreFactoryAddress,
    [ChainId.BASE]: CHAIN_TO_ADDRESSES_MAP[ChainId.BASE].v3CoreFactoryAddress,
    [ChainId.MAGMA_TESTNET]: CHAIN_TO_ADDRESSES_MAP[ChainId.MAGMA_TESTNET].v3CoreFactoryAddress,
    // TODO: Gnosis + Moonbeam contracts to be deployed
};
export const QUOTER_V2_ADDRESSES = {
    ...constructSameAddressMap('0x61fFE014bA17989E743c5F6cB21bF9697530B21e'),
    [ChainId.CELO]: CHAIN_TO_ADDRESSES_MAP[ChainId.CELO].quoterAddress,
    [ChainId.CELO_ALFAJORES]: CHAIN_TO_ADDRESSES_MAP[ChainId.CELO_ALFAJORES].quoterAddress,
    [ChainId.OPTIMISM_GOERLI]: CHAIN_TO_ADDRESSES_MAP[ChainId.OPTIMISM_GOERLI].quoterAddress,
    [ChainId.SEPOLIA]: CHAIN_TO_ADDRESSES_MAP[ChainId.SEPOLIA].quoterAddress,
    [ChainId.ARBITRUM_GOERLI]: CHAIN_TO_ADDRESSES_MAP[ChainId.ARBITRUM_GOERLI].quoterAddress,
    [ChainId.BNB]: CHAIN_TO_ADDRESSES_MAP[ChainId.BNB].quoterAddress,
    [ChainId.AVALANCHE]: CHAIN_TO_ADDRESSES_MAP[ChainId.AVALANCHE].quoterAddress,
    [ChainId.BASE_GOERLI]: CHAIN_TO_ADDRESSES_MAP[ChainId.BASE_GOERLI].quoterAddress,
    [ChainId.BASE]: CHAIN_TO_ADDRESSES_MAP[ChainId.BASE].quoterAddress,
    // TODO: Gnosis + Moonbeam contracts to be deployed
    [ChainId.MAGMA_TESTNET]: CHAIN_TO_ADDRESSES_MAP[ChainId.MAGMA_TESTNET].quoterAddress,
};
export const MIXED_ROUTE_QUOTER_V1_ADDRESSES = {
    [ChainId.MAINNET]: CHAIN_TO_ADDRESSES_MAP[ChainId.MAINNET].v1MixedRouteQuoterAddress,
    [ChainId.GOERLI]: CHAIN_TO_ADDRESSES_MAP[ChainId.GOERLI].v1MixedRouteQuoterAddress,
};
export const UNISWAP_MULTICALL_ADDRESSES = {
    ...constructSameAddressMap('0x1F98415757620B543A52E61c46B32eB19261F984'),
    [ChainId.CELO]: CHAIN_TO_ADDRESSES_MAP[ChainId.CELO].multicallAddress,
    [ChainId.CELO_ALFAJORES]: CHAIN_TO_ADDRESSES_MAP[ChainId.CELO_ALFAJORES].multicallAddress,
    [ChainId.OPTIMISM_GOERLI]: CHAIN_TO_ADDRESSES_MAP[ChainId.OPTIMISM_GOERLI].multicallAddress,
    [ChainId.SEPOLIA]: CHAIN_TO_ADDRESSES_MAP[ChainId.SEPOLIA].multicallAddress,
    [ChainId.ARBITRUM_GOERLI]: CHAIN_TO_ADDRESSES_MAP[ChainId.ARBITRUM_GOERLI].multicallAddress,
    [ChainId.BNB]: CHAIN_TO_ADDRESSES_MAP[ChainId.BNB].multicallAddress,
    [ChainId.AVALANCHE]: CHAIN_TO_ADDRESSES_MAP[ChainId.AVALANCHE].multicallAddress,
    [ChainId.BASE_GOERLI]: CHAIN_TO_ADDRESSES_MAP[ChainId.BASE_GOERLI].multicallAddress,
    [ChainId.BASE]: CHAIN_TO_ADDRESSES_MAP[ChainId.BASE].multicallAddress,
    // TODO: Gnosis + Moonbeam contracts to be deployed
    [ChainId.MAGMA_TESTNET]: CHAIN_TO_ADDRESSES_MAP[ChainId.MAGMA_TESTNET].multicallAddress,
};
export const SWAP_ROUTER_02_ADDRESSES = (chainId) => {
    if (chainId == ChainId.BNB) {
        return BNB_SWAP_ROUTER_02_ADDRESS;
    }
    return '0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45';
};
export const OVM_GASPRICE_ADDRESS = '0x420000000000000000000000000000000000000F';
export const ARB_GASINFO_ADDRESS = '0x000000000000000000000000000000000000006C';
export const TICK_LENS_ADDRESS = CHAIN_TO_ADDRESSES_MAP[ChainId.ARBITRUM_ONE].tickLensAddress;
export const NONFUNGIBLE_POSITION_MANAGER_ADDRESS = CHAIN_TO_ADDRESSES_MAP[ChainId.MAINNET].nonfungiblePositionManagerAddress;
export const V3_MIGRATOR_ADDRESS = CHAIN_TO_ADDRESSES_MAP[ChainId.MAINNET].v3MigratorAddress;
export const MULTICALL2_ADDRESS = '0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696';
export function constructSameAddressMap(address, additionalNetworks = []) {
    return NETWORKS_WITH_SAME_UNISWAP_ADDRESSES.concat(additionalNetworks).reduce((memo, chainId) => {
        memo[chainId] = address;
        return memo;
    }, {});
}
export const WETH9 = {
    [ChainId.MAINNET]: new Token(ChainId.MAINNET, '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', 18, 'WETH', 'Wrapped Ether'),
    [ChainId.GOERLI]: new Token(ChainId.GOERLI, '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6', 18, 'WETH', 'Wrapped Ether'),
    [ChainId.SEPOLIA]: new Token(ChainId.SEPOLIA, '0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14', 18, 'WETH', 'Wrapped Ether'),
    [ChainId.OPTIMISM]: new Token(ChainId.OPTIMISM, '0x4200000000000000000000000000000000000006', 18, 'WETH', 'Wrapped Ether'),
    [ChainId.OPTIMISM_GOERLI]: new Token(ChainId.OPTIMISM_GOERLI, '0x4200000000000000000000000000000000000006', 18, 'WETH', 'Wrapped Ether'),
    [ChainId.ARBITRUM_ONE]: new Token(ChainId.ARBITRUM_ONE, '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1', 18, 'WETH', 'Wrapped Ether'),
    [ChainId.ARBITRUM_GOERLI]: new Token(ChainId.ARBITRUM_GOERLI, '0xe39Ab88f8A4777030A534146A9Ca3B52bd5D43A3', 18, 'WETH', 'Wrapped Ether'),
    [ChainId.BASE_GOERLI]: new Token(ChainId.BASE_GOERLI, '0x4200000000000000000000000000000000000006', 18, 'WETH', 'Wrapped Ether'),
    [ChainId.BASE]: new Token(ChainId.BASE, '0x4200000000000000000000000000000000000006', 18, 'WETH', 'Wrapped Ether'),
    [ChainId.OPTIMISM_SEPOLIA]: new Token(ChainId.OPTIMISM_SEPOLIA, '0x4200000000000000000000000000000000000006', 18, 'WETH', 'Wrapped Ether'),
    [ChainId.ARBITRUM_SEPOLIA]: new Token(ChainId.ARBITRUM_SEPOLIA, '0x4200000000000000000000000000000000000006', 18, 'WETH', 'Wrapped Ether'),
    [ChainId.MAGMA_TESTNET]: new Token(ChainId.MAGMA_TESTNET, '0xF01035A94B45d6544019ea19bAD1baf2387Ca5FA', 18, 'WLAVA', 'Wrapped LAVA'),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzc2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWwvYWRkcmVzc2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsS0FBSyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDM0UsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRWxELE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUVoRSxNQUFNLENBQUMsTUFBTSxxQkFBcUIsR0FDaEMsc0JBQXNCLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGVBQWUsQ0FBQztBQUN0RCxNQUFNLENBQUMsTUFBTSx3Q0FBd0MsR0FDbkQsc0JBQXNCLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGlDQUFpQyxDQUFDO0FBQ3hFLG9FQUFvRTtBQUNwRSxNQUFNLENBQUMsTUFBTSwwQkFBMEIsR0FDckMsc0JBQXNCLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLG1CQUFvQixDQUFDO0FBQzNELE1BQU0sQ0FBQyxNQUFNLHVCQUF1QixHQUNsQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsaUJBQWlCLENBQUM7QUFFeEQsTUFBTSxDQUFDLE1BQU0seUJBQXlCLEdBQWU7SUFDbkQsR0FBRyx1QkFBdUIsQ0FBQyxlQUFlLENBQUM7SUFDM0MsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsc0JBQXNCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLG9CQUFvQjtJQUN6RSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsRUFDdEIsc0JBQXNCLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLG9CQUFvQjtJQUNyRSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsRUFDdkIsc0JBQXNCLENBQUMsT0FBTyxDQUFDLGVB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